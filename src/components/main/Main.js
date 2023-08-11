import "./Main.css";
import hello from "../../img/movielogo.png"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PieDemo from "../charts/PieDemo";


const Main = () => {
    
    const [inmember, setInMember] = useState('');
    const [addmember, setAddMember] = useState('');
    const [moviesale, setMovieSale] = useState('');
    const [snacksale, setSnackSale] = useState('');
    
useEffect(() => {

    async function inMemberCount() {
        const response = await axios.get("http://192.168.0.108:8099/cinemuadmin/inMemberCount");
        setInMember(response.data);
        
    }

    async function addMemberCount() {
        const response = await axios.get("http://192.168.0.108:8099/cinemuadmin/addMemberCount");
        setAddMember(response.data);
        
    }

    async function movieSale() {
        const response = await axios.get("http://192.168.0.108:8099/cinemuadmin/moviesale");
        setMovieSale(response.data);
        
    }
    
    async function snackSale() {
        const response = await axios.get("http://192.168.0.108:8099/cinemuadmin/snacksale");
        setSnackSale(response.data);
        
    }
    inMemberCount();
    addMemberCount();
    movieSale();
    snackSale();
}, [])

    return(
        <main>
          <div className="main__container">
            <div className="main__title">
                <img src={hello} alt="hello"/>
                <div className="main__greeting">
                    <h1>안녕하세요 CINEMU님!</h1>
                    <p>CINEMU 관리자 페이지입니다.</p>
                </div>
            </div>

            <div className="main__cards">
                <div className="cardadmin">
                    <i className="fa-solid fa-user-large cardicon"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">방문자 수:</p>
                        <span className="font-bold text-title">&nbsp;{inmember}명</span>
                    </div>
                </div>

                <div className="cardadmin">
                    <i className="fa-solid fa-user-plus cardicon"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">회원가입 수:</p>
                        <span className="font-bold text-title">&nbsp;{addmember}명</span>
                        <span></span>
                    </div>
                </div>

                <div className="cardadmin">
                    <i className="fa-solid fa-clapperboard cardicon"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">영화 매출:</p>
                        <span className="font-bold text-title">&nbsp;{moviesale}원</span>
                        <span></span>
                    </div>
                </div>

                <div className="cardadmin">
                    <i className="fa-solid fa-cart-shopping cardicon"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">스낵 매출:</p>
                        <span className="font-bold text-title">&nbsp;{snacksale}원</span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className="charts">
                <div className="charts__left">
                    <div className="charts__left__little">
                        <div>
                            <h1>지점별 일 매출 </h1>
                            <p>가산점, 용산점, 잠실점</p>
                        </div>
                        <i className="fa fa-usd"></i>
                    </div>
                    <PieDemo/>
                </div>

                <div className="charts__right">
                    <div className="charts__right__title">
                        <div>
                            <h1>지점별 매출</h1>
                            <p>가산점, 용산점, 잠실점</p>
                        </div>
                        <i className="fa fa-use"></i>
                    </div>

                    <div className="charts__right__cards">
                        <div className="cardmain">
                            <h1>가산점</h1>
                            <p>총 매출: 25,000원</p>
                        </div>

                        <div className="cardmain">
                            <h1>용산점</h1>
                            <p>총 매출: 18,000원</p>
                        </div>

                        <div className="cardmain">
                            <h1>잠실점</h1>
                            <p>총 매출: 5,000원</p>
                        </div>

                        <div className="cardmain">
                            <h1>총 매출</h1>
                            <p>50,000원</p>
                        </div>
                    </div>
                </div>
            </div>

          </div>  
        </main>
    )
}

export default Main;