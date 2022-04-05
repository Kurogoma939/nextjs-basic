// 画面遷移
import Link from 'next/link'
// メタデータ設定
import Head from 'next/head'
// script処理
import Script from 'next/script'

export default function FirstPost() {
	return (
		<>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>First Post</h1>
			<Script
				src="https://connect.facebook.net/en_US/sdk.js"
				strategy="lazyOnload"
				onLoad={() =>
					console.log(`script loaded correctly, window.FB has been populated`)
				}
			/>
		</>
	)
}