import styles from '@/styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="footerInner px-10 py-14 text-xs">
        <div className="footerTop flex justify-between">
          <h2 className="w-1/4">
            <a href="/"><img src="https://earpearp.cafe24.com/2022_web_img/web/footer_logo.png" alt="earp earp"/></a>
          </h2>
          <ul className="flex">
            <li><a href="/event" className="text-xl">EVENT</a></li>
            <li className="ml-4"><a href="/community" className="text-xl">COMMUNITY</a></li>
            <li className="ml-4"><a href="/collaboration" className="text-xl">COLLABORATION</a></li>
          </ul>
        </div>
        <div className="footerBottom flex justify-between pt-28 leading-relaxed">
          <ul className="footerBottom__left flex gap-12">
            <li>
                <p>고객센터</p>
                <p>070-5038-0989</p>
            </li>

            <li>
                <p>MONDAY-FRIDAY</p>
                <p>11:00-18:00</p>
                <p>SAT/HOLIDAY OFF</p>
                <p>BRAKE TIME</p>
                <p>13:00-14:00</p>
            </li>


            <li>
                <p>CS 관련 문의(buy_cs@buyinternational.co.kr)</p>
                <p>온라인 관련 제휴/제안 (earpearp_online@buyinternational.co.kr)</p>
                <p>오프라인 관련 제휴/제안 (earpearp_offline@buyinternational.co.kr)</p>
                <p>COPYRIGHT(C) 2017 EARPEARP</p>
            </li>
          </ul>
          <ul className="footerBottom__right text-right">
            <li className="icon mb-3">
              <ul className='flex justify-end items-center gap-4'>
                <li className='w-6'><a href="https://www.instagram.com/earp_earp/" target="_blank"><img src="https://earpearp.cafe24.com/2022_web_img/web/footer_icon_insta.png" alt="인스타그램"/></a></li>
                <li className='w-3'><a href="https://ko-kr.facebook.com/earpearppp/" target="_blank"><img src="https://earpearp.cafe24.com/2022_web_img/web/footer_icon_facebook.png" alt="페이스북"/></a></li>
                <li className='w-6'><a href="https://www.youtube.com/@earp_earp" target="_blank"><img src="https://earpearp.cafe24.com/2022_web_img/web/footer_icon_youtube.png" alt="유튜브"/></a></li>
              </ul>
            </li>
            <li>
                <p>COMPANY | BUYINTERNATIONAL</p>
                <p>OWNER | LIM SEONG DO</p>
            </li>
            <li>
                <p>CORPORATE REGISTRATION NUMBER | 393-86-00930 </p>
                <p>MALL ORDER LICENSE | 제 2018 - 경기부천 - 1349호 </p>
                <p>ADDRESS | 167, Sinheung-ro, Bucheon-si, Gyeonggi-do, Republic of Korea</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;