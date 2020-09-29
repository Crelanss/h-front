import React, {useState} from 'react';
import styled from "styled-components";
import {display} from "@material-ui/system";
import {Link} from "react-router-dom";

const UploadButtonContainerComponent=styled.div`
    height:40%;
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-direction:column;
    
 
`
const UploadButton=styled.button`
    border: 1px solid #0057B6;
    border-radius:50px;
    background:none;
    width: 428px;
    height: 93px;
    font-family:Proxima Nova Light;
    font-size:24px;
    color:rgba(0, 87, 182, 1);
    font-weight:bold;
    letter-spacing:3px;
    outline: none;
`
const DownloadedButton=styled.button`
    border: 1px solid #54CA54;
    border-radius:50px;
    background:#54CA54;
    width: 428px;
    height: 93px;
    font-family:Proxima Nova Light;
    font-size:24px;
    color:rgba(0, 87, 182, 1);
    font-weight:bold;
    letter-spacing:3px;
    color:white;
    outline: none;
`
const SendDocButton=styled.button`
    border: 1px solid #0057B6;
    border-radius:50px;
    background:none;
    width: 214px;
    height: 93px;
    font-family:Proxima Nova Light;
    font-size:20px;
    color:rgba(0, 87, 182, 1);
    font-weight:bold;
    letter-spacing:3px;
    outline: none;
`

function UploadButtonContainer(){

    let [download, setDownload] = useState(true)

    if (download)
        return(
            <UploadButtonContainerComponent>
                <UploadButton onClick = { () => {
                    var el = window._protected_reference = document.createElement("INPUT");
                    el.type = "file";
                    el.accept = "image/*";
                    el.multiple = "multiple"; // remove to have a single file selection

                    // (cancel will not trigger 'change')
                    el.addEventListener('change', function (ev2) {
                        // access el.files[] to do something with it (test its length!)

                        // add first image, if available
                        setDownload(false)

                        // test some async handling
                        new Promise(function (resolve) {
                            setTimeout(function () {
                                console.log(el.files);
                                resolve();
                            }, 1000);
                        })
                            .then(function () {
                                // clear / free reference
                                el = window._protected_reference = undefined;
                            });

                    });

                    el.click();
                }
                } >Загрузить документ ↑</UploadButton>
            </UploadButtonContainerComponent>
        )
    else
        return(
            <UploadButtonContainerComponent>
                <DownloadedButton onClick = { () => {
                    var el = window._protected_reference = document.createElement("INPUT");
                    el.type = "file";
                    el.accept = "image/*";
                    el.multiple = "multiple"; // remove to have a single file selection

                    // (cancel will not trigger 'change')
                    el.addEventListener('change', function (ev2) {
                        // access el.files[] to do something with it (test its length!)

                        // add first image, if available
                        setDownload(false)

                        // test some async handling
                        new Promise(function (resolve) {
                            setTimeout(function () {
                                console.log(el.files);
                                resolve();
                            }, 1000);
                        })
                            .then(function () {
                                // clear / free reference
                                el = window._protected_reference = undefined;
                            });

                    });

                    el.click();
                }
                } >Документ загружен</DownloadedButton>
                <Link to={'/profile/doclist'}><SendDocButton>Отправить документ</SendDocButton></Link>
            </UploadButtonContainerComponent>
        )
}

export default UploadButtonContainer;