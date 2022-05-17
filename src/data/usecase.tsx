export type UseCaseDegree = "B1" | "B3" | "M1" | "D2";

export const useCaseDegrees: UseCaseDegree[] = ["B1", "B3", "M1", "D2"];

export type UseCase = {
  degree: UseCaseDegree;
  degree_ja: string;
  src_worry: string;
  src_screen: string;
  worries: string;
  solution: string;
};

export const useCaseData: UseCase[] = [
  {
    degree: "B1",
    degree_ja: "学部1年",
    src_worry: "/use-case/b1.png",
    src_screen: "/screen/organizations.png",
    worries: "ひとまずサークルに入ってみたけれど、もっと世界を広げていきたい。",
    solution: "サークルや団体、研究室ごとのページで、自分に合った場が見つかる！",
  },
  {
    degree: "B3",
    degree_ja: "学部3年",
    src_worry: "/use-case/b3.png",
    src_screen: "/screen/article.png",
    worries: "海外の大学院に進学してみたいけれど、どう進めれば良いのだろう。",
    solution: "Articleで、学年・学部を超えて海外進学の対策や院試対策の情報を入手できる！",
  },
  {
    degree: "M1",
    degree_ja: "修士1年",
    src_worry: "/use-case/m1.png",
    src_screen: "/screen/video.png",
    worries: "修士論文は進まないし、研究室以外の人との交流もなく、行き詰まっている。",
    solution: "分野の垣根を超えた様々な学生とであることができ、自分の研究のヒントになるかも！？",
  },
  {
    degree: "D2",
    degree_ja: "博士2年",
    src_worry: "/use-case/d2.png",
    src_screen: "/screen/forum.png",
    worries: "長年研究をやってきたけれど、アカデミアに残るかどうか…キャリア設計に悩む。",
    solution: "悩みを共有したり、様々な人のキャリアを見て、参考にすることができる！！",
  },
];
