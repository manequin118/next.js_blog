import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
  return (
    <div>
      <Head>
        <h1>最初の投稿</h1>
      </Head>

      <Link href="/">ホームへ戻る</Link>
    </div>
  );
}
