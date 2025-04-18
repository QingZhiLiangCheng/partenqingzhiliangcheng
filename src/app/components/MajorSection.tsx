import {cn} from "@/lib/utils";
import {Marquee} from "../components/magicui/marquee";
import {white} from "next/dist/lib/picocolors";

const reviews = [
    {
        name: "CMU15445 Intro to Database System",
        username: "📅date: 2024.1.20 - ing",
        body: "🥰CMU15445是我目前看过的最喜欢的课程.我看的是CMU15445 fall2023\n" +
            "Andy老师说：the most important thing you get to understand is I really only care about two things in my entire life. The first one is my wife and my biological daughter and the second one databases.",
        textColor: "#FF8B8B",
        url: "https://qingzhiliangcheng.cn/database%20systems/cmu%2015-445%EF%BC%9Adatabase%20systems/cmu%2015-445%EF%BC%9Adatabase%20systems/"
    },
    {
        name: "CSAPP CMU15213",
        username: "📅date: 2024.12.24 - ing",
        body: "CSAPP 被称为计算机圣经，这本书是由CMU 计算机系主任 Bryant 教授执笔的.\n" +
            "我是因为b站up主polebug才接触到这本书，后来发现了Bryant 教授所配套的课 CMU15213 Introduce to Computer Systems fall2015.\n" +
            " 相当巧合的是， 15213 正好是 CMU 的邮编（zip code）。 \n" +
            "因此，这门课在 CMU 又被亲切地称为『The course that gives CMU its ZIP !』",
        textColor: "#61BFAD",
        url: "https://qingzhiliangcheng.cn/csapp%20computer-system-a-program-perspective/csapp%20computer-system-a-program-perspective/"
    },
    {
        name: "CPP",
        username: "spring2024",
        body: "当时学cpp的时候刚开始用obsidian 没有留笔记 只留了大作业\n " +
            "课程期间我用封装继承多态, 函数模版, 虚函数, 抽象类, 运算符重载等实现一个List, LinkedList, ArrayList.\n " +
            "大作业用Vue和cpp写了一个酒店管理系统",
        textColor: "#005397",
    },

    {
        name: "LCU 数据结构",
        username: "📅date: 2024.09.20 - 2025.01.06完结✅",
        body: "当时才开始学着用obsidian笔记软件 笔记记得很零散 但是我整理了期末的复习专题\n " +
            "数据结构的两个小实验我写的是 用unity生成自动迷宫 以及 赫夫曼编码(手搓了红黑树,优先队列)\n " +
            "数据结构大作业用Rust写了一个简单的虚拟货币交易系统 老实说最后因为当时水平的原因并没有真正完成",
        textColor: "#162BF4",
        url: "https://qingzhiliangcheng.cn/lcu%20datastructure/lcu%20datastructure/"
    },
    {
        name: "LCU 计算机组成原理",
        username: "📅date: 2024.10.30 - 2025.01.03完结✅",
        body: "大二上课程 fall2024\n" +
            "我当时跟的是哈工大刘宏伟老师的课 但是没有完全跟完. \n" +
            "最后面我总结了考试的专题 大题都考到了\n",
        textColor: "#E88565",
        url: "https://qingzhiliangcheng.cn/lcu%20principles%20of%20computer%20composition/lcu%20principles%20of%20computer%20composition/"
    },
    {
        name: "CS61B Data Structures and Algorithms",
        username: "📅date: 2025.03.02 - ing",
        body: "CS61B，主要内容为Java和数据结构。其中，前4周的时间都在谈Java中会很经常使用到的语法，第5-11周主要在讲数据结构的类型（，第12-14周主要讲各种排序算法和软件设计原则\n " +
            "因为我大二下有Java课 所以我跟了这个课\n" +
            "伯克利大学21年的课程公开了很多资源 但我嫌页面太丑了hhh 然后我跟的是24年春的 但没有公开评分平台我哭死😭",
        textColor: "#1FC8A9",
        url: "https://qingzhiliangcheng.cn/cs%2061b/cs%2061b/"
    },
    {
        name: "LCU Database System",
        username: "📅date: 2024.04.09 - ing",
        body: "LCU的数据库课程教材用的王珊老师的《数据库系统概论》\n" +
            "LCU的数据库课的lab使用的是SQL Server数据库\n" +
            "我整理了复习资料 和 实验的所有步骤和小坑",
        textColor: "#9C9CDD",
        url: ""
    },
    {
        name: "LCU Operating System Lab",
        username: "📅date: 2024.04.12 - ing",
        body: "LCU的操作系统课程汤小丹 汤子瀛老师的《计算机操作系统》 我们学校的老师也参与了编著\n " +
            "LCU的操作系统课的实验分为三个部分 分别是进程调度实验, 资源管理实验和存储器管理实验。三个实验主要就是用C/C++编写模拟程序，我感觉实验指导书给的很详细了，给了大量的代码，只需要补全部分代码即可，但需要去了解整个代码的含义和过程。\n" +
            "个人感觉做着比CMU15445的Project简单很多\n" +
            "我整理了复习资料 和 实验的所有步骤和小坑",
        textColor: "#371722",
        url: ""
    },

];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
                        name,
                        username,
                        body,
                        textColor,
                        url
                    }: {
    name: string;
    username: string;
    body: string;
    textColor: string,
    url?: string
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <a href={url}>
                <div className="flex flex-row items-center gap-2">
                    {/*<img className="rounded-full" width="32" height="32" alt="" src={img} />*/}
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium dark:text-white" style={{color: textColor}}>
                            {name}
                        </figcaption>
                        <p className="text-xs font-medium dark:text-white/40">{username}</p>
                    </div>
                </div>
                <blockquote className="mt-2 text-sm" style={{whiteSpace: 'pre-wrap'}}>{body}</blockquote>
            </a>
        </figure>

    );
};

export function MajorSection() {
    return (
        <section className="library section" id="about">
            <h2 className="section_title_data" id="library_title">Major Course</h2>
            <span className="section_subtitle" id="library_subtitle">主修课程</span>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                </Marquee>
                <div
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div
                    className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>

            </div>
        </section>
    );
}
