import { Ruby } from '../../components/typesetting/Ruby';

type KanjiPageProps = {
  params: {
    kanji: string;
  };
};

export default async function KanjiPage({ params }: KanjiPageProps) {
  const kanji = decodeURIComponent(params.kanji);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h1 lang="ja" className="text-7xl font-bold">
        {kanji}
      </h1>
      <div>Onyomi: チョク、 ジキ</div>
      <div>Kunyomi: ただ.ちに、 す.ぐ、 なお.す</div>
      <div>straightaway, honesty, frankness, fix, repair</div>
      <div lang="ja">
        <Ruby furi="うき">浮</Ruby>
        <Ruby furi="よ">世</Ruby>
        <Ruby furi="うきよだ">絵</Ruby>
        <Ruby furi="よ">世</Ruby>
        <p>Depart immediately.</p>
      </div>
      <div lang="ja">
        <Ruby furi="ただ">直</Ruby>ちに<Ruby furi="しゅっぱつ">出発</Ruby>する。
        <p>Depart immediately.</p>
      </div>
    </div>
  );
}
