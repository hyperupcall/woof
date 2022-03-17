import { transformNodejs } from './transformers/nodejs.ts'
import { transformZig } from './transformers/zig.ts'

import * as util from './util/util.ts'

const doTransformJson = async (
	mirror: string,
	url: string,
	transformFn: (mirror: string, inputJson: any) => any,
	outputFile: string
) => {
	const inputJson = await util.getJson(url)
	const outputJson = transformFn(mirror, inputJson)
	await Deno.writeTextFile(outputFile, JSON.stringify(outputJson, null, '\t'))
}

await doTransformJson(
	'https://nodejs.org',
	'/dist/index.json',
	transformNodejs,
	'./output/Nodejs.json'
)
await doTransformJson(
	'https://ziglang.org',
	'/download/index.json',
	transformZig,
	'./output/Zig.json'
)
