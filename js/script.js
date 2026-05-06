// 전국의 핫플 카페 100곳 데이터
const cafeData = [
    // [서울 권역 - 30곳]
    { name: "청수당 공명", region: "서울", loc: "연남", insta: "cheongsudang_official" },
    { name: "레이어드", region: "서울", loc: "연남", insta: "cafe_layered" },
    { name: "런던 베이글 뮤지엄", region: "서울", loc: "안국", insta: "london.bagel.museum" },
    { name: "앤트러사이트", region: "서울", loc: "서교", insta: "anthracite_coffee_roasters" },
    { name: "943 킹스크로스", region: "서울", loc: "홍대", insta: "943kingscross" },
    { name: "아벨롭", region: "서울", loc: "연남", insta: "aveloop_official" },
    { name: "카페 노티드", region: "서울", loc: "청담", insta: "cafeknotted" },
    { name: "대충유원지", region: "서울", loc: "인왕산", insta: "daechung_yuwonji" },
    { name: "카페 캄포", region: "서울", loc: "가로수길", insta: "cafe.campo" },
    { name: "아우어베이커리", region: "서울", loc: "도산", insta: "ourbakerycafe" },
    { name: "텅비어있는마음", region: "서울", loc: "창덕궁", insta: "tung_seoul" },
    { name: "어니언", region: "서울", loc: "성수", insta: "cafe.onion" },
    { name: "대림창고", region: "서울", loc: "성수", insta: "daelimchanggo_gallery" },
    { name: "멜로워", region: "서울", loc: "성수", insta: "mellower_kr" },
    { name: "루프", region: "서울", loc: "성수", insta: "loof_official" },
    { name: "테디뵈르하우스", region: "서울", loc: "용산", insta: "teddy.beurre.house" },
    { name: "낙원역", region: "서울", loc: "익선동", insta: "nakwon_station" },
    { name: "청수당", region: "서울", loc: "익선동", insta: "cheongsudang_official" },
    { name: "카페 하이웨스트", region: "서울", loc: "익선동", insta: "cafe_highwaist" },
    { name: "꼬르소꼬모", region: "서울", loc: "청담", insta: "10corsocomo" },
    { name: "맨메이드 카페", region: "서울", loc: "도산", insta: "manmade_official" },
    { name: "뮬라", region: "서울", loc: "가로수길", insta: "cafemula" },
    { name: "빵콤마", region: "서울", loc: "연남", insta: "boncomma" },
    { name: "모먼트커피", region: "서울", loc: "동교", insta: "moment___coffee" },
    { name: "도화서길", region: "서울", loc: "삼청", insta: "dohwaseogil" },
    { name: "라미스콘", region: "서울", loc: "익선", insta: "rami_scone" },
    { name: "카페 온화", region: "서울", loc: "익선", insta: "onhwa_official" },
    { name: "포배럴커피", region: "서울", loc: "강남", insta: "fourbarrel_kr" },
    { name: "스탠다드 시스템", region: "서울", loc: "청담", insta: "standardsystem.coffee" },
    { name: "식물관PH", region: "서울", loc: "수서", insta: "sikmulgwan.ph" },

    // [경기/인천 권역 - 20곳]
    { name: "조양방직", region: "경기/인천", loc: "강화", insta: "joyang_bangjik" },
    { name: "포레스트아웃팅스", region: "경기/인천", loc: "송도/일산", insta: "forestoutings_songdo" },
    { name: "더티트렁크", region: "경기/인천", loc: "파주", insta: "dirty_trunk_korea" },
    { name: "앤드테라스", region: "경기/인천", loc: "파주", insta: "andterrace_official" },
    { name: "레드브릿지", region: "경기/인천", loc: "파주", insta: "redbridge_official" },
    { name: "문지리531", region: "경기/인천", loc: "파주", insta: "munjiri531" },
    { name: "카페 아를", region: "경기/인천", loc: "의정부", insta: "cafe_arles" },
    { name: "카페 웨더", region: "경기/인천", loc: "하남", insta: "cafe_weather" },
    { name: "하우스플랜트", region: "경기/인천", loc: "하남", insta: "haus_plant" },
    { name: "어 로프 슬라이스 피스", region: "경기/인천", loc: "용인", insta: "a_loaf_slice_piece" },
    { name: "칼리오페", region: "경기/인천", loc: "용인", insta: "calliope_official" },
    { name: "테라로사", region: "경기/인천", loc: "양평", insta: "terarosacoffee" },
    { name: "하우스 베이커리", region: "경기/인천", loc: "양평", insta: "hausbakery" },
    { name: "카페 라온", region: "경기/인천", loc: "양평", insta: "cafe_raon" },
    { name: "카페 진정성", region: "경기/인천", loc: "김포", insta: "cafe_jinjungsung" },
    { name: "수산공원", region: "경기/인천", loc: "김포", insta: "susangongwon" },
    { name: "가나안덕 카페", region: "경기/인천", loc: "고양", insta: "ganaanduck_official" },
    { name: "바다앞테라스", region: "경기/인천", loc: "영종도", insta: "terrace.in.sea" },
    { name: "메이드림", region: "경기/인천", loc: "영종도", insta: "madedream_official" },
    { name: "셀로스터즈", region: "경기/인천", loc: "광주", insta: "cell_roasters" },

    // [강원 권역 - 10곳]
    { name: "테라로사 커피공장", region: "강원", loc: "강릉", insta: "terarosacoffee" },
    { name: "카페 툇마루", region: "강원", loc: "강릉", insta: "cafe_toetmaru" },
    { name: "엔드 투 앤드", region: "강원", loc: "강릉", insta: "end_to_and" },
    { name: "스테이인터뷰", region: "강원", loc: "강릉", insta: "stayinterview_official" },
    { name: "보사노바", region: "강원", loc: "강릉", insta: "bn_coffee" },
    { name: "바다정원", region: "강원", loc: "고성", insta: "seajarden_official" },
    { name: "온더버튼", region: "강원", loc: "고성", insta: "onthebutton_official" },
    { name: "칠성조선소", region: "강원", loc: "속초", insta: "chilsungboatyard" },
    { name: "카페 설악산로", region: "강원", loc: "속초", insta: "seoraksanro_cafe" },
    { name: "뮤지엄산 카페", region: "강원", loc: "원주", insta: "museumsan" },

    // [경상 권역 - 15곳]
    { name: "웨이브온", region: "경상", loc: "기장", insta: "waveoncoffee_official" },
    { name: "코랄라니", region: "경상", loc: "기장", insta: "corallani_official" },
    { name: "피크스퀘어", region: "경상", loc: "기장", insta: "peak.square" },
    { name: "카페 루프탑", region: "경상", loc: "해운대", insta: "cafe_rooftop" },
    { name: "랜드마크9", region: "경상", loc: "전포", insta: "landmark9_official" },
    { name: "카페 드 220볼트", region: "경상", loc: "영도", insta: "cafe_de_220volt" },
    { name: "스릴 온 더 빈", region: "경상", loc: "거제", insta: "thrill_on_the_bean" },
    { name: "온더선셋", region: "경상", loc: "거제", insta: "onthesunset" },
    { name: "바다소리", region: "경상", loc: "영덕", insta: "badasori_cafe" },
    { name: "커피 한 잔", region: "경상", loc: "경주", insta: "coffee_hanjan_gyeongju" },
    { name: "카페 아덴", region: "경상", loc: "경주 보문", insta: "aden_official" },
    { name: "황남다다", region: "경상", loc: "경주 황리단길", insta: "hwangnam_dada" },
    { name: "이재모커피", region: "경상", loc: "부산", insta: "leejaemocoffee_official" },
    { name: "컵넛", region: "경상", loc: "부산", insta: "cupnut_official" },
    { name: "카페 스톤", region: "경상", loc: "대구", insta: "cafe_stone" },

    // [충청/전라 권역 - 15곳]
    { name: "에이트", region: "충청/전라", loc: "대전", insta: "cafe_eight_official" },
    { name: "풍뉴가", region: "충청/전라", loc: "대전", insta: "pungnyuga" },
    { name: "카페 드 블랑", region: "충청/전라", loc: "천안", insta: "cafe_de_blanc" },
    { name: "핀카페", region: "충청/전라", loc: "아산", insta: "pin_cafe" },
    { name: "포레스트", region: "충청/전라", loc: "당진", insta: "cafe_forest" },
    { name: "카페 라붐", region: "충청/전라", loc: "청주", insta: "cafe_laboum" },
    { name: "아원고택", region: "충청/전라", loc: "완주", insta: "awon_official" },
    { name: "두베카페", region: "충청/전라", loc: "완주", insta: "dubhe_cafe" },
    { name: "외할머니솜씨", region: "충청/전라", loc: "전주", insta: "halmoms_official" },
    { name: "전망", region: "충청/전라", loc: "전주", insta: "jeonmang_cafe" },
    { name: "불갑산 상사화", region: "충청/전라", loc: "영광", insta: "sang_sa_hwa" },
    { name: "라라브레드", region: "충청/전라", loc: "광주", insta: "lala.bread" },
    { name: "담양 제과", region: "충청/전라", loc: "담양", insta: "damyang_bakery" },
    { name: "카페 서플라이", region: "충청/전라", loc: "담양", insta: "supply_official" },
    { name: "모이핀", region: "충청/전라", loc: "여수", insta: "moifin_official" },

    // [제주 권역 - 10곳]
    { name: "더클리프", region: "제주", loc: "중문", insta: "thecliffjeju" },
    { name: "카페 노티드 애월", region: "제주", loc: "애월", insta: "cafeknotted" },
    { name: "하이엔드 제주", region: "제주", loc: "애월", insta: "hiendjeju" },
    { name: "앤트러사이트 한림", region: "제주", loc: "한림", insta: "anthracite_coffee_roasters" },
    { name: "바다다", region: "제주", loc: "서귀포", insta: "vadada_jeju" },
    { name: "원앤온리", region: "제주", loc: "산방산", insta: "oneandonly_jeju" },
    { name: "인스밀", region: "제주", loc: "대정", insta: "ins_mill" },
    { name: "공백", region: "제주", loc: "구좌", insta: "gongbech_official" },
    { name: "아줄레주", region: "제주", loc: "성산", insta: "azulejo_jeju" },
    { name: "델문도", region: "제주", loc: "함덕", insta: "cafedelmoondo" }
];

// 페이지 이동 함수
function go(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('p-' + id).classList.add('active');
    window.scrollTo(0, 0);
}

// 지역별 리스트 출력 함수
function showList(region) {
    const grid = document.getElementById('grid');
    const title = document.getElementById('listTitle');

    grid.innerHTML = '';
    title.textContent = `${region} 핫플레이스`;

    const filtered = cafeData.filter(c => c.region === region);

    filtered.forEach(c => {
        // 네이버 지도 검색 URL
        const naverSearch = `https://m.map.naver.com/search2/search.naver?query=${encodeURIComponent(c.loc + " " + c.name)}`;
        // 인스타그램 프로필 URL
        const instaLink = `https://www.instagram.com/${c.insta}/`;

        const el = document.createElement('div');
        el.className = 'card';
        el.innerHTML = `
            <div class="cardHead">${c.name}</div>
            <div class="imgBox">
                <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400" alt="Cafe Image">
                <div class="overlay">
                    <a href="${naverSearch}" target="_blank" class="btnLink btn-naver">네이버 지도 열기</a>
                    <a href="${instaLink}" target="_blank" class="btnLink btn-insta">인스타그램 방문</a>
                </div>
            </div>
            <div class="cardFoot">
                <span class="loc-tag">위치: ${c.loc}</span>
                <a href="${instaLink}" target="_blank" class="insta-id">@${c.insta}</a>
            </div>
        `;
        grid.appendChild(el);
    });

    go('list');
}
