<script setup lang="ts">
import { googlePopupLogin } from "@/utils/googleAuth";
import { login } from "@/utils/api";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
useSeoMeta({
  title: t('index.SeoMeta.title'),
  description: t('index.SeoMeta.description'),
});

const googleLogin = async () => {
  const res: any = await googlePopupLogin();
  const arg = {
    google: true,
  }
  const res2 = await login({ ...arg, ...res });
  if (res2?.errCode === 0) {
    saveToken(res2.data.token);
  }
};

useHead({
  // 预加载首屏图片
  link: [
    {
      rel: "preload",
      as: "image",
      href: "/image/home/big_img.webp",
      type: "image/webp",
    },
  ],
});

const state = reactive({
  flagList: [true, true, true, true],
});

const switchChange = (index: number) => {
  state.flagList[index] = !state.flagList[index];
};
const review_list = computed(() => [
  {
    avatar: "/image/avatar/1.png",
    nickname: "Boby Jinn",
    content:
      "“I skyrocketed from 6.0 to 7.5 in just three weeks with ieltspractice.ai! Their instant feedback pinpointed my weaknesses and made every study session count.”",
  },
  {
    avatar: "/image/avatar/2.png",
    nickname: "Michelle Garces",
    content:
      "“The AI-driven analysis on ieltspractice.ai gave me incredible confidence. It accurately predicted my final band score, so there were no surprises on test day.”",
  },
  {
    avatar: "/image/avatar/3.jpg",
    nickname: "manjunath ashokraj",
    content:
      "“After using ieltspractice.ai for a month, my speaking score jumped by a whole band! I’ve never felt more prepared or motivated to keep improving.”",
  },
  {
    avatar: "/image/avatar/4.png",
    nickname: "Nahid Mohammadi",
    content:
      "“ieltspractice.ai helped me improve my reading fast. The smart quizzes kept me focused on what really matters for a higher band score.”",
  },
  {
    avatar: "/image/avatar/5.jpg",
    nickname: "Phương Anh NT",
    content:
      "“I loved how personalized the feedback was on this platform. It felt like having a private tutor guiding my entire study schedule.”",
  },
  {
    avatar: "/image/avatar/6.jpg",
    nickname: "Sorah Lee",
    content:
      "“Thanks to their targeted practice modules, I improved my writing score faster than I ever thought possible. The convenience of studying in short bursts truly sold me.”",
  },
]);

</script>

<template>
  <div class="home">
    <div class="part1">
      <div class="title">
        <p class="titleBox">{{ $t("index.party1.p0") }}</p>
      </div>
      <h1 class="h_one">{{ $t("index.party1.h1") }}</h1>
      <div class="subtitle">
        <p>{{ $t("index.party1.p") }}</p>
      </div>
      <div class="twoBtn">
        <div class="left btn" @click="googleLogin">
          <div>{{ $t("index.party1.SignUPWithGoogle") }}</div>
        </div>
        <div class="right btn">
          <div>{{ $t("index.party1.StartForFree") }}</div>
        </div>
      </div>
      <div class="bigImg">
        <img src="/image/home/big_img.webp" :alt="$t('index.party1.p0')" fetchpriority="high" />
      </div>
    </div>
    <div class="part2">
      <h2 class="h_two">{{ $t("index.party2.h2") }}</h2>
      <div class="img_article">
        <div class="img">
          <img src="/image/home/home1.webp" loading="lazy" :alt="$t('index.party2.h3_1')" />
        </div>
        <div class="article">
          <div class="article_content">
            <h3>{{ $t("index.party2.h3_1") }}</h3>
            <p>{{ $t("index.party2.p_1") }}</p>
            <div class="btn">
              <div class="font">{{ $t("index.party2.btn") }}</div>
              <div class="icon">
                <img src="../assets/home/arrow_right.svg" :alt="$t('index.party2.btn_img_alt')">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="article_img">
        <div class="img">
          <img src="/image/home/home2.webp" loading="lazy" :alt="$t('index.party2.h3_2')" />
        </div>
        <div class="article">
          <div class="article_content">
            <h3>{{ $t("index.party2.h3_2") }}</h3>
            <p>
              {{ $t("index.party2.p_2") }}
            </p>
            <div class="btn">
              <div class="font">{{ $t("index.party2.btn") }}</div>
              <div class="icon">
                <img src="../assets/home/arrow_right.svg" :alt="$t('index.party2.btn_img_alt')" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="img_article">
        <div class="img">
          <img src="/image/home/home3.webp" loading="lazy" :alt="$t('index.party2.h3_3')" />
        </div>
        <div class="article">
          <div class="article_content">
            <h3>{{ $t("index.party2.h3_3") }}</h3>
            <p>{{ $t("index.party2.p_3") }}</p>
            <div class="btn">
              <div class="font">{{ $t("index.party2.btn") }}</div>
              <div class="icon">
                <img src="../assets/home/arrow_right.svg" :alt="$t('index.party2.btn_img_alt')">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="article_img">
        <div class="img">
          <img src="/image/home/home4.webp" loading="lazy" :alt="$t('index.party2.h3_4')" />
        </div>
        <div class="article">
          <div class="article_content">
            <h3>{{ $t("index.party2.h3_4") }}</h3>
            <p>
              {{ $t("index.party2.p_4") }}
            </p>
            <div class="btn">
              <div class="font">{{ $t("index.party2.btn") }}</div>
              <div class="icon">
                <img src="../assets/home/arrow_right.svg" :alt="$t('index.party2.btn_img_alt')" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="part3">
      <div class="review">
        <div class="review_title">{{ $t("index.party3.title") }}</div>
        <div class="review_list">
          <div v-for="item in review_list" class="review_item">
            <div class="top">
              <div class="avatar">
                <img :src="item.avatar" :alt="item.nickname" loading="lazy" />
              </div>
              <div class="right">
                <div class="nickname">{{ item.nickname }}</div>
                <div class="star">
                  <img src="../assets/home/five_star.svg" alt="five_star" />
                </div>
              </div>
            </div>
            <div class="bottom">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="part4">
      <h2>{{ $t('index.party4.h2') }}</h2>
      <div class="ask_and_answer">
        <div class="ask">
          <div>{{ $t('index.party4.question1') }}</div>
          <div class="switch btn" @click="switchChange(0)">
            <img v-if="state.flagList[0]" src="../assets/home/open.svg" alt="open" />
            <img v-else src="../assets/home/close.svg" alt="close" />
          </div>
        </div>
        <div v-show="!state.flagList[0]" class="answer">
          {{ $t('index.party4.answer1') }}
        </div>
      </div>
      <div class="ask_and_answer mt24">
        <div class="ask">
          <div>{{ $t('index.party4.question2') }}</div>
          <div class="switch btn" @click="switchChange(1)">
            <img v-if="state.flagList[1]" src="../assets/home/open.svg" alt="open" />
            <img v-else src="../assets/home/close.svg" alt="close" />
          </div>
        </div>
        <div v-show="!state.flagList[1]" class="answer">
          {{ $t('index.party4.answer2') }}
        </div>

      </div>
      <div class="ask_and_answer mt24">
        <div class="ask">
          <div>{{ $t('index.party4.question3') }}</div>
          <div class="switch btn" @click="switchChange(2)">
            <img v-if="state.flagList[2]" src="../assets/home/open.svg" alt="open" />
            <img v-else src="../assets/home/close.svg" alt="close" />
          </div>
        </div>
        <div v-show="!state.flagList[2]" class="answer">
          {{ $t('index.party4.answer3') }}
        </div>

      </div>
      <div class="ask_and_answer mt24">
        <div class="ask">
          <div>{{ $t('index.party4.question4') }}</div>
          <div class="switch btn" @click="switchChange(3)">
            <img v-if="state.flagList[3]" src="../assets/home/open.svg" alt="open" />
            <img v-else src="../assets/home/close.svg" alt="close" />
          </div>
        </div>
        <div v-show="!state.flagList[3]" class="answer">
          {{ $t('index.party4.answer4') }}
        </div>
      </div>
    </div>
    <div class="part5">
      <div class="box">
        <img class="boxBg" src="/image/home/bottom_background.webp" :alt="$t('index.party5.bgcAlt')" loading="lazy" />
        <h2>
          {{ $t("index.party5.h2") }}
        </h2>
        <div class="twoBtn">
          <div class="left btn" @click="googleLogin">
            <div>{{ $t("index.party5.SignUPWithGoogle") }}</div>
          </div>
          <div class="right btn">
            <div>{{ $t("index.party5.StartForFree") }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home {
  margin: 0 auto;

  .btn {
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .mt24 {
    margin-top: 24px;
  }

  .part1 {
    background: linear-gradient(142deg, #00a6fe 0%, #0058fe 100%);
    background-size: 100% 100%;
    padding: 120px 461px;

    .title {
      display: flex;
      align-items: center;
      justify-content: center;

      .titleBox {
        max-width: 400px;
        width: 100%;
        height: 56px;
        padding: 12px 49px;
        border-radius: 40px 40px 40px 40px;
        border: 1px solid #a2dfff;
        font-weight: bold;
        font-size: 24px;
        color: #ffffff;
        line-height: 33px;
        text-align: center;
        box-sizing: border-box;
        white-space: nowrap;
      }
    }

    .h_one {
      margin: 16px 0 24px;
      font-weight: bold;
      font-size: 56px;
      color: #ffffff;
      line-height: 78px;
      text-align: center;
      font-style: normal;
    }

    .subtitle {
      p {
        font-weight: 400;
        font-size: 20px;
        color: #ffffff;
        line-height: 32px;
        text-align: center;
      }
    }

    .twoBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
      margin: 80px 0 80px;

      @media (max-width: 730px) {
        flex-direction: column;
      }

      .btn {
        width: 240px;
        height: 48px;
        border-radius: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 16px;
        color: #0058fe;
        line-height: 22px;
        box-sizing: border-box;
      }

      .left {
        background-color: #ffffff;
        cursor: pointer;
      }

      .right {
        border: 2px solid #ffffff;
        color: #ffffff;
        background-color: transparent;
        cursor: pointer;
      }
    }

    .bigImg {
      img {
        height: 100%;
        width: 100%;
        display: block;
      }
    }
  }

  .part2 {
    margin: 120px auto 0;
    max-width: 1280px;

    .h_two {
      font-weight: bold;
      font-size: 48px;
      color: #171c1d;
      line-height: 64px;
      text-align: center;
    }

    .img_article,
    .article_img {
      margin-top: 80px;
      display: grid;
      grid-template-areas: "img article";
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      box-sizing: border-box;

      @media screen and (max-width: 926px) {
        grid-template-columns: 1fr;
        grid-template-areas: "img" "article" !important;
        gap: 0;
      }

      .img {
        grid-area: img;
        width: 100%;
        display: flex;
        align-items: center;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .article {
        grid-area: article;
        width: 100%;

        .article_content {
          h3 {
            margin: 79px 0 24px;
            font-weight: bold;
            font-size: 32px;
            color: #171c1d;
            line-height: 40px;
            text-align: left;
          }

          p {
            font-weight: 400;
            font-size: 16px;
            color: #626364;
            line-height: 26px;
            text-align: left;
          }

          .btn {
            margin-top: 48px;
            max-width: 156px;
            height: 40px;
            width: 100%;
            padding: 10px 32px;
            background: #0058fe;
            border-radius: 38px 38px 38px 38px;
            box-sizing: border-box;
            display: flex;
            align-items: center;

            .font {
              font-weight: bold;
              font-size: 14px;
              color: #ffffff;
              line-height: 19px;
              white-space: nowrap;
            }

            .icon {
              margin-left: 8px;
            }
          }
        }
      }
    }

    .article_img {
      grid-template-areas: "article img";
    }
  }

  .part3 {
    margin: 120px auto 0;
    // background: #1369F4;
    max-width: 1280px;
    border-radius: 40px 40px 40px 40px;

    @media screen and (max-width: 1460px) {
      margin-top: 60px;
    }

    .review {
      .review_title {
        margin-bottom: 80px;
        text-align: center;
        font-weight: bold;
        font-size: 48px;
        color: #171c1d;
        line-height: 64px;
      }

      .review_list {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        justify-content: center;

        @media screen and (max-width: 1460px) {
          gap: 20px;
        }

        .review_item {
          border: 1px solid #cccccc;
          padding: 32px;
          max-width: 400px;
          width: 100%;
          box-sizing: border-box;
          border-radius: 16px 16px 16px 16px;

          .top {
            display: flex;
            align-items: center;

            .avatar {
              width: 48px;
              height: 48px;
              flex: none;
              overflow: hidden;

              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }

            .right {
              flex: auto;
              margin-left: 16px;
              display: flex;

              .nickname {
                flex: auto;
                font-size: 16px;
                color: #171c1d;
                line-height: 28px;
                flex: auto;
              }

              .star {
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }

          .bottom {
            margin-top: 16px;

            p {
              font-weight: 400;
              font-size: 16px;
              color: #3d3f40;
              line-height: 26px;
            }
          }
        }

        .review_item:nth-child(1) {
          background-image: linear-gradient(135deg, #ffffff, #f0f5ff);
          border: 1px solid #c7d6f6;
        }

        .review_item:nth-child(2) {
          background-image: linear-gradient(135deg, #ffffff, #e8fcef);
          border: 1px solid #b2dbc1;
        }

        .review_item:nth-child(3) {
          background-image: linear-gradient(135deg, #ffffff, #fcf7e4);
          border: 1px solid #eae4ca;
        }

        .review_item:nth-child(4) {
          background-image: linear-gradient(135deg, #ffffff, #f5effc);
          border: 1px solid #e1d8eb;
        }

        .review_item:nth-child(5) {
          background-image: linear-gradient(135deg, #ffffff, #f7edf0);
          border: 1px solid #e2cdd3;
        }

        .review_item:nth-child(6) {
          background-image: linear-gradient(135deg, #ffffff, #f2f7e7);
          border: 1px solid #dae5c3;
        }
      }
    }
  }

  .part4 {
    margin: 120px auto 0;
    max-width: 1280px;

    h2 {
      font-weight: bold;
      font-size: 48px;
      color: #171c1d;
      line-height: 64px;
      text-align: center;
      margin-bottom: 80px;
    }

    .ask_and_answer {
      position: relative;
      background: #f6f6f6;
      border-radius: 16px 16px 16px 16px;
      padding: 32px;
      box-sizing: border-box;

      .ask {
        font-weight: bold;
        font-size: 24px;
        color: #171c1d;
        line-height: 26px;
        text-align: left;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        .switch {
          width: 32px;
          height: 32px;
          background-color: #0058fe;
          border-radius: 50%;
        }
      }

      .answer {
        margin-top: 16px;
        font-weight: 400;
        font-size: 16px;
        color: #3d3f40;
        line-height: 26px;
        text-align: left;
      }
    }
  }

  .part5 {
    .box {
      margin: 120px auto 0;
      padding: 120px 0;
      max-width: 1280px;
      box-sizing: border-box;
      position: relative;

      .boxBg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        border-radius: 16px;
      }

      h2 {
        font-weight: bold;
        font-size: 48px;
        color: #ffffff;
        line-height: 72px;
        text-align: center;
      }

      .twoBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
        margin-top: 80px;

        @media (max-width: 730px) {
          flex-direction: column;
        }

        .btn {
          width: 240px;
          height: 48px;
          border-radius: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 16px;
          color: #0058fe;
          line-height: 22px;
          box-sizing: border-box;
        }

        .left {
          background-color: #ffffff;
          cursor: pointer;
        }

        .right {
          border: 2px solid #ffffff;
          color: #ffffff;
          background-color: transparent;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1900px) {
  .home {
    .part1 {
      padding: 60px 230px;
    }
  }
}

@media screen and (max-width: 1300px) {
  .home {

    .part2,
    .part3,
    .part4,
    .part5 {
      padding: 0 30px;
    }

    .part1 {
      padding: 60px 80px;

      .h_one {
        font-size: 40px;
        line-height: 56px;
      }

      .twoBtn {
        margin: 40px 0 40px;
      }
    }

    .part2 {
      margin-top: 60px;

      .h_two {
        font-size: 40px;
        line-height: 56px;
      }

      .img_article,
      .article_img {
        margin-top: 40px;

        .article {
          .article_content {
            h3 {
              margin: 40px 0 12px;
            }
          }
        }
      }
    }

    .part3 {
      .review_title {
        font-size: 40px !important;
        line-height: 56px !important;
        margin-bottom: 40px !important;
      }
    }

    .part4 {
      margin-top: 60px;

      h2 {
        font-size: 40px;
        line-height: 56px;
        margin-bottom: 40px;
      }
    }

    .part5 {
      .box {
        margin-top: 60px;
        padding: 60px 0;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home {
    .part1 {
      padding: 30px 30px;

      .h_one {
        font-size: 40px;
        line-height: 56px;
      }

      .twoBtn {
        margin: 20px 0 20px;
      }
    }

    .part2 {
      margin-top: 30px;

      .img_article,
      .article_img {
        margin-top: 20px;

        .article {
          .article_content {
            h3 {
              margin: 20px 0 6px;
            }

            .btn {
              margin-top: 24px;
            }
          }
        }
      }
    }

    .part3 {
      margin-top: 30px;

      .review_title {
        margin-bottom: 20px !important;
      }
    }

    .part4 {
      margin-top: 30px;

      h2 {
        margin-bottom: 20px;
      }
    }

    .part5 {
      .box {
        margin-top: 30px;
        padding: 30px;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .part4 {
    .ask_and_answer {
      .ask {
        font-size: 20px !important;
      }
    }
  }
}

@media screen and (max-width: 460px) {
  .part1 {
    .title {
      .titleBox {
        font-size: 20px !important;
        padding: 12px 20px !important;
      }
    }
  }

  .part3 {
    .review {
      .review_list {
        .top {
          .right {
            flex-direction: column;
            align-items: flex-start;

            .star {
              height: 16px;
            }
          }
        }
      }
    }
  }

  .part5 {
    .box {
      h2 {
        font-size: 40px !important;
        line-height: 56px !important;
        word-wrap: break-word !important;
      }
    }
  }
}
</style>
