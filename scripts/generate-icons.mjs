#!/usr/bin/env node
/**
 * Generates placeholder PWA icons in public/.
 * Run: node scripts/generate-icons.mjs
 *
 * Output:
 *   Android  → icon-192.png, icon-512.png, icon-maskable-512.png
 *   iOS      → apple-touch-icon.png (180), apple-touch-icon-167.png, apple-touch-icon-152.png
 *   Browser  → icon-32.png
 *
 * Replace placeholders with real artwork keeping the same filenames.
 * Maskable: keep content within the inner 80% of the canvas (safe zone).
 */

import { deflateSync } from 'zlib'
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pub = join(__dirname, '..', 'public', 'pwa')

// ── CRC32 ──────────────────────────────────────────────────────────────────
const CRC_TABLE = (() => {
  const t = new Uint32Array(256)
  for (let i = 0; i < 256; i++) {
    let c = i
    for (let j = 0; j < 8; j++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    t[i] = c
  }
  return t
})()

function crc32(buf) {
  let c = 0xffffffff
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

function u32(n) {
  const b = Buffer.alloc(4)
  b.writeUInt32BE(n)
  return b
}

function pngChunk(type, data) {
  const t = Buffer.from(type, 'ascii')
  return Buffer.concat([u32(data.length), t, data, u32(crc32(Buffer.concat([t, data])))])
}

/**
 * @param {number} size     canvas size in pixels
 * @param {number} r,g,b    fill colour
 * @param {number} safePad  fraction to leave as white padding (for maskable safe-zone)
 */
function solidPNG(size, r, g, b, safePad = 0) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  const ihdr = pngChunk('IHDR', Buffer.concat([u32(size), u32(size), Buffer.from([8, 2, 0, 0, 0])]))

  const rowBytes = size * 3
  const raw = Buffer.alloc((rowBytes + 1) * size)
  const pad = Math.round(size * safePad)

  for (let y = 0; y < size; y++) {
    raw[y * (rowBytes + 1)] = 0
    for (let x = 0; x < size; x++) {
      const inside = x >= pad && x < size - pad && y >= pad && y < size - pad
      const pos = y * (rowBytes + 1) + 1 + x * 3
      raw[pos]     = inside ? r : 255
      raw[pos + 1] = inside ? g : 255
      raw[pos + 2] = inside ? b : 255
    }
  }

  return Buffer.concat([sig, ihdr, pngChunk('IDAT', deflateSync(raw)), pngChunk('IEND', Buffer.alloc(0))])
}

// Tailwind cyan-900 → #164e63 → rgb(22, 78, 99)
const [R, G, B] = [22, 78, 99]

const icons = [
  // Android
  { file: 'icon-192.png',           size: 192, pad: 0,    group: 'Android' },
  { file: 'icon-512.png',           size: 512, pad: 0,    group: 'Android' },
  { file: 'icon-maskable-512.png',  size: 512, pad: 0.1,  group: 'Android (maskable, safe-zone 10%)' },
  // iOS
  { file: 'apple-touch-icon.png',   size: 180, pad: 0,    group: 'iOS iPhone' },
  { file: 'apple-touch-icon-167.png', size: 167, pad: 0,  group: 'iOS iPad Pro' },
  { file: 'apple-touch-icon-152.png', size: 152, pad: 0,  group: 'iOS iPad' },
  // Browser
  { file: 'icon-32.png',            size: 32,  pad: 0,    group: 'Browser favicon' },
]

for (const { file, size, pad, group } of icons) {
  writeFileSync(join(pub, file), solidPNG(size, R, G, B, pad))
  console.log(`✓  ${file.padEnd(30)} ${size}×${size}  ${group}`)
}

console.log('\nPlaceholders written. Replace with real artwork keeping the same filenames.')
