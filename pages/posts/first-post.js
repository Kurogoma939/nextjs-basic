// 画面遷移
import Link from 'next/link'
// メタデータ設定
import Head from 'next/head'
// script処理
import Script from 'next/script'
// CSSを適応したレイアウトのimport
import Layout from '../../components/layout'

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>First Post</h1>
			<h2>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</h2>
		</Layout>
	)
}