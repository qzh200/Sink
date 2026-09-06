// One-shot script to strip footer brand + social row from default.vue
import { readFileSync, writeFileSync } from 'node:fs'

const file = 'F:/博客文件/Sink/app/layouts/default.vue'
let s = readFileSync(file, 'utf8')

const startMarker = '<!-- Footer -->'
const endMarker = '</footer>'
const startIdx = s.indexOf(startMarker)
const endIdx = s.indexOf(endMarker) + endMarker.length
if (startIdx < 0 || endIdx < 0) {
  throw new Error('markers not found')
}

const newFooter = `<!-- Footer -->
    <footer
      class="
        border-t bg-background pt-8 pb-[calc(2rem+env(safe-area-inset-bottom))]
        text-foreground
      "
    >
      <div class="mx-auto max-w-6xl px-6">
        <div
          class="
            flex flex-col items-center gap-6 pt-2
            md:flex-row md:justify-center
          "
        >
          <!--
            之前 footer 里有 Sink logo + title + 社交链接（X / Telegram / GitHub），
            按用户要求"全删"，footer 现在空内容。
            左上角"返回 Hoshiumi 主页"由 HoshiumiBackLink 提供。
          -->
        </div>
      </div>
    </footer>`

s = s.slice(0, startIdx) + newFooter + s.slice(endIdx)
writeFileSync(file, s, 'utf8')
console.log('footer replaced')
