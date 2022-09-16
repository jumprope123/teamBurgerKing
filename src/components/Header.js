import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faCaretDown} from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [extendsDiv, setExtendsDiv]= useState(false);

    const ExtendsDiv = () =>{
        setExtendsDiv(true);
    }

    const CloseDiv = () =>{
        setExtendsDiv(false);
    }

    return (
        <React.Fragment>
            <div className={'row background_white w-full'}>
                <div className={'col-2'}></div>
                <div className={'col-8'}>
                    <div className={'row mg0'}>
                        <div className={'col-2'}>
                            <img src='/image/header/logo.png' style={{width:'90px',height:'100px'}}/>
                        </div>
                        <div className={'col-2 pt40'} onMouseOver={ExtendsDiv} onMouseLeave={CloseDiv}>
                            <span className={'fontBM_header'}>메뉴소개&nbsp;</span>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                        <div className={'col-2 pt40'} onMouseOver={ExtendsDiv} onMouseLeave={CloseDiv}>
                            <span className={'fontBM_header'}>매장소개&nbsp;</span>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                        <div className={'col-2 pt40'} onMouseOver={ExtendsDiv} onMouseLeave={CloseDiv}>
                            <span className={'fontBM_header'}>이벤트&nbsp;</span>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                        <div className={'col-2 pt40'} onMouseOver={ExtendsDiv} onMouseLeave={CloseDiv}>
                            <span className={'fontBM_header'}>브랜드스토리&nbsp;</span>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                        <div className={'col-2'}>
                            <img src='/image/header/deliveryOrder.png' style={{width:'185px',height:'56px', marginTop:'30px', marginLeft:'15px'}}/>
                        </div>
                    </div>
                </div>
                <div className={'col-2'}></div>
            </div>
            <div className={'row background_white w-full fontBM_NavBar'} hidden={!extendsDiv} style={{position:'absolute' ,zIndex:'9'}} onMouseLeave={CloseDiv}>
                <div className={'col-2'}></div>
                <div className={'col-8'}>
                    <div className={'row mg0'}>
                        <div className={'col-2'}></div>
                        <div className={'col-2'} onMouseOver={ExtendsDiv}>
                            <ul className={'listStyleNone'}>
                                <li><Link to="/Menu" className={'textDecorationNone'}>스페셜&할인팩</Link></li>
                                <li><Link to="/Menu" className={'textDecorationNone'}>신제품(NEW)</Link></li>
                                <li><Link to="/Menu" className={'textDecorationNone'}>프리미엄</Link></li>
                                <li><Link to="/Menu" className={'textDecorationNone'}>와퍼&주니어</Link></li>
                                <li><Link to="/Menu" className={'textDecorationNone'}>치킨&슈림프버거</Link></li>
                                <li><Link to="/Menu" className={'textDecorationNone'}>올데이킹</Link></li>
                                <li><Link to="/Menu" className={'textDecorationNone'}>사이드</Link></li>
                                <li><Link to="/Menu" className={'textDecorationNone'}>음료&디저트</Link></li>
                            </ul>
                        </div>
                        <div className={'col-2'} onMouseOver={ExtendsDiv}>
                            <ul className={'listStyleNone'}>
                                <li><Link to="/Shop" className={'textDecorationNone'}>매장찾기</Link></li>
                            </ul>
                        </div>
                        <div className={'col-2'} onMouseOver={ExtendsDiv}>
                            <ul className={'listStyleNone'}>
                                <li><Link to="/Event" className={'textDecorationNone'}>이벤트</Link></li>
                            </ul>
                        </div>
                        <div className={'col-2'} onMouseOver={ExtendsDiv}>
                            <ul className={'listStyleNone'}>
                                <li><Link to="/Brand" className={'textDecorationNone'}>BRAND</Link></li>
                                <li><Link to="/Brand" className={'textDecorationNone'}>WHOPPER</Link></li>
                                <li><Link to="/Brand" className={'textDecorationNone'}>COMM.</Link></li>
                            </ul>
                        </div>
                        <div className={'col-2'}></div>
                    </div>
                </div>
                <div className={'col-2'}></div>
            </div>
            {/*<div class="list-group">*/}
            {/*    <li class="list-group-item list-group-item-success"><Link to="/">Brand</Link></li>*/}
            {/*    <li class="list-group-item list-group-item-success"><Link to="/Menu">Menu</Link></li>*/}
            {/*    <li class="list-group-item list-group-item-success"><Link to="/Shop">Shop</Link></li>*/}
            {/*</div>*/}
            <hr/>
        </React.Fragment>
    );
};

export default Header;