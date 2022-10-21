import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeStateFooter, changeStateHeader } from "../../store/Store";
import WidthNavBar from "../../components/main/menu/WidthNavBar";
import BrandNavBar from "../../components/main/brand/BrandNavBar";
import { Nav } from "react-bootstrap";
import CommNavBar from "../../components/main/brand/CommNavBar";
import ShowMore from "react-show-more-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Comm = () => {
  const [commValue, setCommValue] = useState(0);
  const [tvDigitalValue, setTvDigitalValue] = useState("All");
  const [clickedItem, setClickedItem] = useState({
    title: "골든치즈렐라 와퍼",
    url: (
      <iframe
        width="100%"
        height="605"
        src="https://www.youtube.com/embed/LcMFpQnyFTs"
        title="[버거킹] 드디어 찾았다! 골든치즈렐라 와퍼 출시!"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    img: "/image/main/brand/data2022_1.png",
  });

  function ChangeClickedItem(data) {
    let newClickedItem = {
      title: data["title"],
      url: data["url"],
      img: data["img"],
    };

    setClickedItem(newClickedItem);
  }

  useEffect(() => {}, [clickedItem]);

  const [data2014, setData2014] = useState([
    {
      title: "와우스낵",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/5TZluxikz7w"
          title="[버거킹] WOW TV CF(15')"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2014_15.png",
    },
    {
      title: "치폴레와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/ADEs-0zul2Y"
          title="[버거킹] 치폴레와퍼&치폴레치킨버거 TV CF 15″ (BURGER KING Korea Chipotle WHOPPER & Chipotle Chicken Burger TVC 15″)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2014_14.png",
    },
    {
      title: "콰트로치즈와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/kMDZGIuKG-A"
          title="[버거킹] 이정재 콰트로치즈와퍼 TV CF(15')"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2014_13.png",
    },
    {
      title: "크레이지갈릭스테이크버거",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/l2zrOrmX3gQ"
          title="2013년 크레이지갈릭스테이크버거"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2014_12.png",
    },
    {
      title: "와퍼하나더",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/5gGYCP_G4Sc"
          title="2013년 와퍼하나더"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2014_11.png",
    },
    {
      title: "로얄그릴드치킨버거",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/e_L85REmmxo"
          title="2012년 로얄그릴드치킨버거"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2014_10.png",
    },
    {
      title: "하와이안버거",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/bFsVAadVcPA"
          title="2011년 하와이안버거"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2014_9.png",
    },
    {
      title: "와일드이스트와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/bznc9vI4JiU"
          title="2010년 와일드와이드웨스트&이스트"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2014_8.png",
    },
    {
      title: "앵그리와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/4rkm7ChTVCY"
          title="2009년 앵그리와퍼"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2014_7.png",
    },
    {
      title: "와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/ceKYiwPgwq0"
          title="2007년 WHOPPER"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2014_6.png",
    },
    {
      title: "스테이크하우스버거",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/lftCgDs120Y"
          title="2006년 스테이크하우스"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2014_5.png",
    },
    {
      title: "와퍼클럽",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/inFP-El3znU"
          title="2006년 WHOPPER CLUB"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2014_4.png",
    },
    {
      title: "머쉬룸스테이크하우스버거",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/jhDZuU53ASw"
          title="2005년 머쉬룸버거"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2014_3.png",
    },
    {
      title: "갈릭스테이크하우스버거",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/bXyhQUY4ACQ"
          title="2005년 갈릭스테이크하우스"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2014_2.png",
    },
    {
      title: "스테이크하우스버거",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/w2okyBC8Ke4"
          title="2004년 스테이크하우스"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2014_1.png",
    },
  ]);

  const [data2019, setData2019] = useState([
    {
      title: "독퍼(Dogpper)",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/ntMGbzRSiS0"
          title=""
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_1.png",
    },
    {
      title: "볼케이노칠리와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/bWgKV0WtZvs"
          title="[버거킹] 볼케이노 칠리와퍼 TVCF 15” 세친구 편"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_2.png",
    },
    {
      title: "ALL DAY KING 사딸라",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/RZ-VK_zjJRY"
          title="[버거킹] 김영철 아저씨 사딸라! ALL DAY KING 사딸라! TVCF 15"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_3.png",
    },
    {
      title: "올데이킹 묻고더블",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/LNIpr3efeeI"
          title="Ask and go to the
                  Blue"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_4.png",
    },
    {
      title: "통모짜와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/v4EeiMYw5qw"
          title="[버거킹] 통모짜 와퍼 사랑고민 여자 편"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_5.png",
    },
    {
      title: "트러플콰트로머쉬룸와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/UKESKrTItY8"
          title="[버거킹] 트러플콰트로머쉬룸와퍼"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_6.png",
    },
    {
      title: "킹대킹",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/oNwOhUU4rWw"
          title="[버거킹] 킹대킹 TVCF 15"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_7.png",
    },
    {
      title: "몬스터와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/2Ru_Ms6QQzw"
          title="[버거킹] 몬스터와퍼 TVCF 15"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_8.png",
    },
    {
      title: "앵그리몬스터X",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/6ONVE2OZhKY"
          title="[버거킹] ANGRY 몬스터X가 사라졌다!? (BURGER KING ANGRY MONSTER X)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_9.png",
    },
    {
      title: "밸런스치킨버거",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/XTi6r7C7cy0"
          title="[버거킹] 밸런스 치킨버거 모델편 15"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_10.png",
    },
    {
      title: "뉴올리언스치킨버거",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/aGcmU39PDXw"
          title="[버거킹] 뉴올리언스 치킨버거 TV CF 15” (BURGER KING Korea New Orleans Chicken Burger TVC 15”)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_11.png",
    },
    {
      title: "붉은대게와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/XFH6dBRyzXc"
          title="[버거킹] 붉은대게와퍼 TV CF 15” (BURGER KING Korea Red Crab WHOPPER® TVC 15”)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_12.png",
    },
    {
      title: "크리미통새우와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/cNY3oh9TO7w"
          title="[버거킹] 크리미 통새우와퍼 TV CF 15” (BURGER KING Korea Creamy Tong Shrimp WHOPPER® TVC 15”)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_13.png",
    },
    {
      title: "통새우와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/r1n-27EPu8A"
          title="[버거킹] 통새우와퍼 TV CF 15” (BURGER KING Korea Whole Shrimp WHOPPER® TVC 15”)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_14.png",
    },
    {
      title: "더블킹슈퍼불고기",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/imDfbYoxNSs"
          title="[버거킹] 더블킹 슈퍼불고기 TV CF 15” BURGER KING Korea Double King – Super Bulgogi Burger TVC 15”"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_15.png",
    },
    {
      title: "할라피뇨와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/VM39RGhlVeg"
          title="[버거킹] 할라피뇨와퍼 TV CF 15” (BURGER KING Korea Jalapeno WHOPPER TVC 15”)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_16.png",
    },
    {
      title: "더블킹몬스터베이비",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/uAgceJo--Rc"
          title="[버거킹] 더블킹 몬스터베이비 TV CF 15” BURGER KING Korea Double King   Monster Baby Burger TVC 15”"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_17.png",
    },
    {
      title: "통모짜와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/AF3VM1UfVr0"
          title="[버거킹] 통모짜와퍼 TV CF 15” (BURGER KING Korea Tong Mozza WHOPPER TVC 15”)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_18.png",
    },
    {
      title: "더블킹울트라치킨",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/zphAZpo0luE"
          title="[버거킹] 더블킹 울트라치킨 TV CF 15” BURGER KING Korea Double King – Ultra Chicken Burger TVC 15”"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2019_19.png",
    },
  ]);

  const [data2022, setData2022] = useState([
    {
      title: "골든치즈렐라 와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/LcMFpQnyFTs"
          title="[버거킹] 드디어 찾았다! 골든치즈렐라 와퍼 출시!"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2022_1.png",
    },
    {
      title: "타바스코 버거",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/w2Olk6l0mGY"
          title="[버거킹] NEW 타바스코 버거 3종 출시"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2022_2.png",
    },
    {
      title: "잔망루피 슈림프 버거",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/6-aLI4gAaRA"
          title="[버거킹] NEW 잔망루피 슈림프버거 출시!"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2022_3.png",
    },
    {
      title: "텍사스칠리 와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/tB-AQbpcuOE"
          title="[버거킹] NEW 텍사스칠리 와퍼 출시"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2022_4.png",
    },
    {
      title: "피넛버터스태커",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/4orwTSAw3bQ"
          title="[버거킹] 신제품 피넛버터 스태커 출시"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2022_5.png",
    },
    {
      title: "앵그리트러플와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/SJ9puhkhlxY"
          title="[버거킹] 이것이 운명적 와퍼, 앵그리 트러플 와퍼 출시!"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2022_6.png",
    },
    {
      title: "더블화이트갈릭와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/AeDPdqHbF3w"
          title="[버거킹] 신제품 더블 화이트 갈릭 와퍼 출시"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2022_7.png",
    },
    {
      title: "기네스스태커",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/ZnEEPvjYJAg"
          title="[버거킹] 압도적인 맛! 기네스 스태커 출시"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2022_8.png",
    },
    {
      title: "기네스통베이컨와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/E0I6dM5BobU"
          title="[버거킹] 기네스 와퍼 '통' 커지다"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2022_9.png",
    },
    {
      title: "치즈렐라와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/NxnvbUIxID0"
          title="[버거킹] 모짜렐라 치즈가 통째로! 치즈렐라 와퍼 출시"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2022_10.png",
    },
    {
      title: "상어가족 새우버거(2021)",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/KNqF7q-rsEI"
          title="[버거킹] 더 통통한 새우와 함께 돌아온 상어가족 새우버거"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2022_11.png",
    },
    {
      title: "몬스터Ⅱ",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/AlHvB9-jCPI"
          title="[버거킹] 진짜 괴물 같은 녀석을 만나다, 몬스터Ⅱ 출시!"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2022_12.png",
    },
    {
      title: "플랜트와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/1AY8xxWgDL0"
          title="[버거킹] 불맛 가득! 신제품 플랜트 와퍼"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2022_13.png",
    },
    {
      title: "직화소불고기버거",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/_jDi6rYtIX8"
          title="[버거킹] 패티까지 진짜 불고기! 직화 소불고기 버거 출시"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2022_14.png",
    },
    {
      title: "기네스와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/p_gELGe5Ubs"
          title="[버거킹] NEW 기네스 와퍼 출시!"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2022_15.png",
    },
    {
      title: "칠리크랩통새우와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/oyKYQr4zU4c"
          title="[버거킹] NEW 칠리크랩통새우 출시!"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2022_16.png",
    },
    {
      title: "붉은대게와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/pCyePydLajI"
          title="[버거킹] 게 누구냐! 다시 돌아온 붉은대게와퍼"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2022_17.png",
    },
    {
      title: "더콰트로치즈와퍼",
      url: (
        <iframe
          width="100%"
          height="605"
          src="https://www.youtube.com/embed/WdwFn9mjPqI"
          title="[버거킹] 모짜렐라 치즈번으로 더 특별하게! 더콰트로치즈 대출시"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      img: "/image/main/brand/data2022_18.png",
    },
  ]);

  const [allData, setAllData] = useState(
    data2022.concat(data2019).concat(data2014)
  );

  /**
   * 리덕스의 리듀서를 사용하기 위한 변수선언
   */
  let dispatch = useDispatch();

  /**
   * 페이지별 가로네비게이션을 선언하기 위한 Hooks
   * key값이 보여지는값, value값이 클릭시 이동할 Link주소
   * value값이 false선언시 클릭불가능한 text로 나타난다.
   */
  const [widthNavBarData, setWidthNavBarData] = useState({
    HOME: "/Home",
    브랜드스토리: "/Brand",
    "COMM.": false,
  });

  /**
   * ComponentDidmount와 같은 동작을 하는 Hooks
   * 리덕스의 changeState함수를 호출하여 인자로 true,false를 전달한다.
   * true인 경우 Header와 Footer가 존재, 반대의 경우 Main페이지만 나타난다.
   */
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(changeStateHeader(true));
    dispatch(changeStateFooter(true));
  }, []);

  function getChangedCommNavBar(data) {
    setTvDigitalValue(data);
  }

  const CommTabContent = () => {
    if (commValue === 0) {
      return (
        <>
          <div className={"row w-full min-w910 gx-0"}>
            <div
              className={"col-12 mgt30 justify-content-center textAlignCenter"}
            >
              {/* 유투브영상 - START*/}
              {clickedItem.url}
              {/* 유투브영상 - END*/}
              {/* ALL ~ 2014 - START*/}
              <CommNavBar
                CommNavBarData={tvDigitalValue}
                getChangedCommNavBar={getChangedCommNavBar}
              />
              {/* ALL ~ 2014 - END*/}
            </div>
          </div>
          {/*하단 자료 - START*/}
          <div className={"row w-full min-w910 gx-0 mgt50"}>
            {/*2014~ - START*/}
            {tvDigitalValue == "data2014" && (
              <ShowMore
                items={data2014}
                by={20}
                onEnd={() => {
                  console.log("end of the list");
                }}
              >
                {({ current, onMore }) => (
                  <div className={"row w-full min-w910 gx-0"}>
                    {/*반복문 - START*/}
                    {current.map((item) => {
                      return (
                        <div className={"col-3 alignItemsCenter"}>
                          <div className={"displayFlex justify-content-center"}>
                            <img
                              className={
                                clickedItem.url == item.url ? "px8solidred" : ""
                              }
                              style={{ width: "270px", height: "152px" }}
                              id={item.img}
                              src={item.img}
                              onClick={() => {
                                ChangeClickedItem(item);
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                                });
                              }}
                              onMouseOver={() => {
                                window.document.getElementById(
                                  item.img
                                ).style.cursor = "pointer";
                              }}
                              onMouseLeave={() => {
                                window.document.getElementById(
                                  item.img
                                ).style.cursor = "default";
                              }}
                            />
                          </div>
                          <div className={"displayFlex justify-content-center"}>
                            <p className={"fontBM_menuDetail"}>{item.title}</p>
                          </div>
                        </div>
                      );
                    })}
                    {/*반복문 - END*/}
                    <div className={"row w-full min-w910 gx-0"}>
                      <div className={"col-5"}></div>
                      <div className={"col-2"}>
                        <button
                          className={
                            "fontBM_Event_noBold colorWhite background_brown borderRadius15"
                          }
                          style={{ width: "100%", height: "70px" }}
                          disabled={!onMore}
                          hidden={!onMore}
                          onClick={() => {
                            if (!!onMore) onMore();
                          }}
                        >
                          <div className={"justify-content-center displayFlex"}>
                            <span>더보기&nbsp;&nbsp;</span>
                            <span style={{ marginTop: "2px" }}>
                              <FontAwesomeIcon
                                icon={faChevronDown}
                                style={{ fontWeight: "bold" }}
                              />
                            </span>
                          </div>
                        </button>
                      </div>
                      <div className={"col-5"}></div>
                    </div>
                  </div>
                )}
              </ShowMore>
            )}
            {/*2014~ - END*/}
            {/*2019~ - START*/}
            {tvDigitalValue == "data2019" && (
              <>
                <ShowMore
                  items={data2019}
                  by={20}
                  onEnd={() => {
                    console.log("end of the list");
                  }}
                >
                  {({ current, onMore }) => (
                    <div className={"row w-full min-w910 gx-0"}>
                      {/*반복문 - START*/}
                      {current.map((item) => {
                        return (
                          <div className={"col-3 alignItemsCenter"}>
                            <div
                              className={"displayFlex justify-content-center"}
                            >
                              <img
                                className={
                                  clickedItem.url == item.url
                                    ? "px8solidred"
                                    : ""
                                }
                                style={{ width: "270px", height: "152px" }}
                                id={item.img}
                                src={item.img}
                                onClick={() => {
                                  ChangeClickedItem(item);
                                  window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth",
                                  });
                                }}
                                onMouseOver={() => {
                                  window.document.getElementById(
                                    item.img
                                  ).style.cursor = "pointer";
                                }}
                                onMouseLeave={() => {
                                  window.document.getElementById(
                                    item.img
                                  ).style.cursor = "default";
                                }}
                              />
                            </div>
                            <div
                              className={"displayFlex justify-content-center"}
                            >
                              <p className={"fontBM_menuDetail"}>
                                {item.title}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                      {/*반복문 - END*/}
                      <div className={"row w-full min-w910 gx-0"}>
                        <div className={"col-5"}></div>
                        <div className={"col-2"}>
                          <button
                            className={
                              "fontBM_Event_noBold colorWhite background_brown borderRadius15"
                            }
                            style={{ width: "100%", height: "70px" }}
                            disabled={!onMore}
                            hidden={!onMore}
                            onClick={() => {
                              if (!!onMore) onMore();
                            }}
                          >
                            <div
                              className={"justify-content-center displayFlex"}
                            >
                              <span>더보기&nbsp;&nbsp;</span>
                              <span style={{ marginTop: "2px" }}>
                                <FontAwesomeIcon
                                  icon={faChevronDown}
                                  style={{ fontWeight: "bold" }}
                                />
                              </span>
                            </div>
                          </button>
                        </div>
                        <div className={"col-5"}></div>
                      </div>
                    </div>
                  )}
                </ShowMore>
              </>
            )}
            {/*2019~ - END*/}
            {/*2022~ - START*/}
            {tvDigitalValue == "data2022" && (
              <>
                <ShowMore
                  items={data2022}
                  by={20}
                  onEnd={() => {
                    console.log("end of the list");
                  }}
                >
                  {({ current, onMore }) => (
                    <div className={"row w-full min-w910 gx-0"}>
                      {/*반복문 - START*/}
                      {current.map((item) => {
                        return (
                          <div className={"col-3 alignItemsCenter"}>
                            <div
                              className={"displayFlex justify-content-center"}
                            >
                              <img
                                className={
                                  clickedItem.url == item.url
                                    ? "px8solidred"
                                    : ""
                                }
                                style={{ width: "270px", height: "152px" }}
                                id={item.img}
                                src={item.img}
                                onClick={() => {
                                  ChangeClickedItem(item);
                                  window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth",
                                  });
                                }}
                                onMouseOver={() => {
                                  window.document.getElementById(
                                    item.img
                                  ).style.cursor = "pointer";
                                }}
                                onMouseLeave={() => {
                                  window.document.getElementById(
                                    item.img
                                  ).style.cursor = "default";
                                }}
                              />
                            </div>
                            <div
                              className={"displayFlex justify-content-center"}
                            >
                              <p className={"fontBM_menuDetail"}>
                                {item.title}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                      {/*반복문 - END*/}
                      <div className={"row w-full min-w910 gx-0"}>
                        <div className={"col-5"}></div>
                        <div className={"col-2"}>
                          <button
                            className={
                              "fontBM_Event_noBold colorWhite background_brown borderRadius15"
                            }
                            style={{ width: "100%", height: "70px" }}
                            disabled={!onMore}
                            hidden={!onMore}
                            onClick={() => {
                              if (!!onMore) onMore();
                            }}
                          >
                            <div
                              className={"justify-content-center displayFlex"}
                            >
                              <span>더보기&nbsp;&nbsp;</span>
                              <span style={{ marginTop: "2px" }}>
                                <FontAwesomeIcon
                                  icon={faChevronDown}
                                  style={{ fontWeight: "bold" }}
                                />
                              </span>
                            </div>
                          </button>
                        </div>
                        <div className={"col-5"}></div>
                      </div>
                    </div>
                  )}
                </ShowMore>
              </>
            )}
            {/*2022~ - END*/}
            {/*ALL~ - START*/}
            {tvDigitalValue == "All" && (
              <>
                <ShowMore
                  items={allData}
                  by={20}
                  onEnd={() => {
                    console.log("end of the list");
                  }}
                >
                  {({ current, onMore }) => (
                    <div className={"row w-full min-w910 gx-0"}>
                      {/*반복문 - START*/}
                      {current.map((item) => {
                        return (
                          <div className={"col-3 alignItemsCenter"}>
                            <div
                              className={"displayFlex justify-content-center"}
                            >
                              <img
                                className={
                                  clickedItem.url == item.url
                                    ? "px8solidred"
                                    : ""
                                }
                                style={{ width: "270px", height: "152px" }}
                                id={item.img}
                                src={item.img}
                                onClick={() => {
                                  ChangeClickedItem(item);
                                  window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth",
                                  });
                                }}
                                onMouseOver={() => {
                                  window.document.getElementById(
                                    item.img
                                  ).style.cursor = "pointer";
                                }}
                                onMouseLeave={() => {
                                  window.document.getElementById(
                                    item.img
                                  ).style.cursor = "default";
                                }}
                              />
                            </div>
                            <div
                              className={"displayFlex justify-content-center"}
                            >
                              <p className={"fontBM_menuDetail"}>
                                {item.title}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                      {/*반복문 - END*/}
                      <div className={"row w-full min-w910 gx-0"}>
                        <div className={"col-5"}></div>
                        <div className={"col-2"}>
                          <button
                            className={
                              "fontBM_Event_noBold colorWhite background_brown borderRadius15"
                            }
                            style={{ width: "100%", height: "70px" }}
                            disabled={!onMore}
                            hidden={!onMore}
                            onClick={() => {
                              if (!!onMore) onMore();
                            }}
                          >
                            <div
                              className={"justify-content-center displayFlex"}
                            >
                              <span>더보기&nbsp;&nbsp;</span>
                              <span style={{ marginTop: "2px" }}>
                                <FontAwesomeIcon
                                  icon={faChevronDown}
                                  style={{ fontWeight: "bold" }}
                                />
                              </span>
                            </div>
                          </button>
                        </div>
                        <div className={"col-5"}></div>
                      </div>
                    </div>
                  )}
                </ShowMore>
              </>
            )}
            {/*ALL~ - END*/}
          </div>
          {/*하단 자료 - END*/}
        </>
      );
    } else if (commValue === 1) {
      return <></>;
    } else if (commValue === 2) {
      return <></>;
    } else if (commValue === 3) {
      return <></>;
    }
  };

  return (
    <React.Fragment>
      <WidthNavBar WidthNavBarData={widthNavBarData} />
      {/*브랜드 네비바 - START*/}
      <div className={"mgt30"}>
        <div className={"row w-full min-w910 gx-0"}>
          <div className={"col-2"}></div>
          <div className={"col-8"}>
            <div className={"row mg0 min-w910 fontBM_MenuNavBar_big"}>
              <div className={"col-3"}>브랜드스토리</div>
              <div
                className={
                  "col-9 fontBM_MenuNavBar_small displayFlex justify-content-end textAlignRight"
                }
              >
                <div className={"mgt30"}>
                  <Link
                    to="/Brand"
                    state={{
                      navData: "BRAND",
                    }}
                    className={"textDecorationNone colorBlack"}
                  >
                    <span
                      id="BRAND"
                      className={"textDecorationNone color_MenuNavBar"}
                      onMouseOver={() => {
                        window.document.getElementById("BRAND").style.cursor =
                          "pointer";
                      }}
                      onMouseLeave={() => {
                        window.document.getElementById("BRAND").style.cursor =
                          "default";
                      }}
                    >
                      BRAND
                    </span>
                  </Link>
                </div>
                <div className={"mgl25 mgt30"}>
                  <Link
                    to="/Brand"
                    state={{
                      navData: "WHOPPER",
                    }}
                    className={"textDecorationNone colorBlack"}
                  >
                    <span
                      id={"WHOPPER"}
                      className={"textDecorationNone color_MenuNavBar"}
                      onMouseOver={() => {
                        window.document.getElementById("WHOPPER").style.cursor =
                          "pointer";
                      }}
                      onMouseLeave={() => {
                        window.document.getElementById("WHOPPER").style.cursor =
                          "default";
                      }}
                    >
                      WHOPPER
                    </span>
                  </Link>
                </div>
                <div className={"mgl25 mgt30"}>
                  <Link
                    to={"/Comm"}
                    className={"textDecorationNone colorBlack"}
                  >
                    <span
                      id={"COMM"}
                      className={"color_MenuNavBarActivate"}
                      onMouseOver={() => {
                        window.document.getElementById("COMM").style.cursor =
                          "pointer";
                      }}
                      onMouseLeave={() => {
                        window.document.getElementById("COMM").style.cursor =
                          "default";
                      }}
                    >
                      COMM.
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"col-2"}></div>
      </div>
      {/*브랜드 네비바 - END*/}
      {/*메인 화면 구성 - START*/}
      <div className={"mgt30 mgb30"}>
        <div className={"row w-full min-w910 gx-0"}>
          <div className={"col-2"}></div>
          <div className={"col-8"}>
            <Nav
              id={"comm_nav"}
              fill
              justify
              className="justify-content-center fontBM_Event_noBold"
              variant="tabs"
              defaultActiveKey="link-0"
              style={{ border: "none" }}
            >
              {/*광고(tv/Digital) - START*/}
              <Nav.Item>
                <Nav.Link
                  id={"comm_nav0"}
                  eventKey="link-0"
                  className={
                    commValue == 0
                      ? "border2pxSolidBlack"
                      : "border2pxSolidBlackBottom"
                  }
                  onClick={() => {
                    setCommValue(0);
                    ChangeClickedItem({
                      title: "골든치즈렐라 와퍼",
                      url: (
                        <iframe
                          width="100%"
                          height="605"
                          src="https://www.youtube.com/embed/LcMFpQnyFTs"
                          title="[버거킹] 드디어 찾았다! 골든치즈렐라 와퍼 출시!"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ),
                      img: "/image/main/brand/data2022_1.png",
                    });
                  }}
                >
                  <span className={commValue == 0 ? "colorBlack" : "colorGray"}>
                    광고(TV/Digital)
                  </span>
                </Nav.Link>
              </Nav.Item>
              {/*광고(tv/Digital) - END*/}
              {/*수상내역 - START*/}
              <Nav.Item>
                <Nav.Link
                  id={"comm_nav1"}
                  eventKey="link-1"
                  className={
                    commValue == 1
                      ? "border2pxSolidBlack"
                      : "border2pxSolidBlackBottom"
                  }
                  onClick={() => {
                    setCommValue(1);
                  }}
                >
                  <span className={commValue == 1 ? "colorBlack" : "colorGray"}>
                    수상내역
                  </span>
                </Nav.Link>
              </Nav.Item>
              {/*수상내역 - END*/}
              {/*신제품 - START*/}
              <Nav.Item>
                <Nav.Link
                  id={"comm_nav2"}
                  eventKey="link-2"
                  className={
                    commValue == 2
                      ? "border2pxSolidBlack"
                      : "border2pxSolidBlackBottom"
                  }
                  onClick={() => {
                    setCommValue(2);
                  }}
                >
                  <span className={commValue == 2 ? "colorBlack" : "colorGray"}>
                    신제품
                  </span>
                </Nav.Link>
              </Nav.Item>
              {/*신제품 - END*/}
              {/*ESG - START*/}
              <Nav.Item>
                <Nav.Link
                  id={"comm_nav3"}
                  eventKey="link-3"
                  className={
                    commValue == 3
                      ? "border2pxSolidBlack"
                      : "border2pxSolidBlackBottom"
                  }
                  onClick={() => {
                    setCommValue(3);
                  }}
                >
                  <span className={commValue == 3 ? "colorBlack" : "colorGray"}>
                    ESG
                  </span>
                </Nav.Link>
              </Nav.Item>
              {/*ESG - END*/}
            </Nav>
            <CommTabContent />
          </div>
          <div className={"col-2"}></div>
        </div>
      </div>
      {/*메인 화면 구성 - END*/}
    </React.Fragment>
  );
};

export default Comm;
