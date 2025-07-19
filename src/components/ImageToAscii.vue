<template>
    <div class="grid grid-cols-3 gap-4">
        <div class="col-span-1">
            Click the image to browse files
            <div>
                <button
                    aria-label="Clear image"
                    class="text-sm border border-white/40 px-3 py-1 rounded hover:bg-white/10 transition"
                    title="Clear image"
                    @click="clearImage"
                >
                    ❌ Clear
                </button>
            </div>
            <input
                ref="fileInput"
                type="file"
                accept=".png,.jpg"
                class="hidden"
                @change="imageToAscii"
            />
            <img
                :src="previewUrl || imagePlaceholder"
                alt="Uploaded image"
                class="my-2 cursor-pointer shadow"
                :class="previewUrl ? 'max-w-xs' : 'w-[150px] h-[150px]'"
                @click="openImageBrowser"
            />
        </div>
        <div class="col-span-2">
            Then you can see the result below
            <div>
                <button
                    aria-label="Change color mode"
                    class="text-sm border border-white/40 px-3 py-1 rounded hover:bg-white/10 transition"
                    title="Change color mode"
                    @click="colored = !colored"
                >
                    {{ colored ? 'No color' : 'With colors' }}
                </button>
            </div>
            <div
                v-if="colored"
                class="my-2 bg-gray-900/70 text-green-500 text-xs leading-none font-mono whitespace-pre overflow-auto"
                v-html="coloredAsciiArt"
            >
            </div>
            <div
                v-else
                class="my-2 bg-gray-900/70 text-green-500 text-xs leading-none font-mono whitespace-pre overflow-auto"
            >
                {{ asciiArt || 'Nothing here for now' }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import imagePlaceholder from '@/assets/image/image-100.png'

const fileInput = ref(null)
const previewUrl = ref('')
const colored = ref(false)
const asciiArt = ref('')
const coloredAsciiArt = ref('')

function openImageBrowser() {
    fileInput.value.click()
}

function imageToAscii(event) {
    const asciiChars = '@%#*+=-:. '
    const file = event.target.files[0]

    if (!file) {
        previewUrl.value = ''
        asciiArt.value = ''
        coloredAsciiArt.value = ''

        return
    }

    previewUrl.value = window.URL.createObjectURL(file)
    const img = new Image()
    img.src = previewUrl.value
    img.onload = () => {
        const canvas = document.createElement('canvas')
        const width = 100
        const aspect = img.height / img.width
        canvas.width = width
        canvas.height = width * aspect * 0.5

        const context = canvas.getContext('2d')
        context.drawImage(img, 0, 0, canvas.width, canvas.height)
        const { data } = context.getImageData(0, 0, canvas.width, canvas.height)
        let output = ''
        let coloredOutput = ''

        for (let y = 0; y < canvas.height; y++) {
            for (let x = 0; x < canvas.width; x++) {
                const i = (y * canvas.width + x) * 4
                const red = data[i]
                const green = data[i + 1]
                const blue = data[i + 2]
                const brightness = (red + green + blue) / 3
                const charIdx = Math.floor((brightness / 255) * (asciiChars.length - 1))
                const char = asciiChars[charIdx]
                output += char
                coloredOutput += `<span style="color: rgb(${red}, ${green}, ${blue})">${char}</span>`
            }

            output += '\n'
            coloredOutput += '<br/>'
        }

        asciiArt.value = output
        coloredAsciiArt.value = coloredOutput
    }
}

function clearImage() {
    previewUrl.value = ''
    asciiArt.value = ''
}
</script>
