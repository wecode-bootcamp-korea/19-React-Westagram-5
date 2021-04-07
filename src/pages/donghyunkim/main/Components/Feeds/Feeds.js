import React, { Component } from 'react'
import Comments from '../Comments/Comments';
import './Feeds.scss'

class Feeds extends Component {
    constructor(props){
        super(props);
        this.state = {
            myId : 'kdh24',
            comment: '',
            textKeyValue: '',
            commentArr:[
                {id:1, userId:'_apink_pinkpanda', content:'Apink🐼💖❤️💙💜 #APINK #에이핑크 #CHORONG #박초롱 #BOMI #윤보미 #EUNJI #정은지 #NAEUN #손나은 #NAMJOO #김남주 #HAYOUNG #오하영'},
                {id:2, userId:'i_want.apink', content:'YAAAAAAAAAAAA QUE RAINHAS ❤️🙌 MEU DEUS QUE LINDAAAS ELAS E TÃO MARAVILHOSAS 😔❤ MAIS EU NÃO AGUENTO VER ISSO PQ EU VOU DESMAIAR KSKSKS'}
            ],
            buttonDisable : true
        }
    }

    commentChange = (e) => {
        // console.log('this is onChange');
        // console.log(this.state.textKeyValue);
        // console.log(e.target.value);
        // console.log(e.target.value.length);
        if(this.state.textKeyValue === 13 && e.target.value.length <= 1){
            // 엔터죽이기
            // console.log('This is Nullenter')
            this.setState({
                comment:'',
                textKeyValue: ''
            })
            return;
        } else {
            this.setState({
                comment : e.target.value,
                buttonDisable: false,
            });
            
        }
    }

    commentUp = (e) => {
        console.log('this is commentUp')
        if(this.state.comment.length < 0){
            return;
        }else{
            let commentArr = this.state.commentArr;
            commentArr.push({id: (this.state.commentArr.length+1), userId: this.state.myId, content: this.state.comment})

            this.setState({
                commentArr:commentArr,
                comment:'',
                buttonDisable:true,
            })
        }
        // e.target.value;
    }
    textareaKeyDown = (e) => {
        console.log('this is key down')
        if (e.keyCode === 13) {
            this.setState({
                textKeyValue: e.keyCode
            });
            
            // e.preventDefault();
        }
        console.log(this.state.textKeyValue);
    }

    textareaKeyUp = (e) => {
        // console.log('this is keyup');
        // console.log(e.target.value.length);
        // console.log(e.target.value);
        if (e.keyCode === 13) {
            if (e.target.value.length === 1 ) {
                e.preventDefault();
                // console.log(e.target.value);
                this.setState({
                    comment: '',
                    buttonDisable: true,
                    textKeyValue: e.keyCode
                })
            } else if (e.target.value.length > 1 ) {
                // console.log(e.target.value)
                e.stopPropagation();
                this.commentUp();
            }
        }
        
    } 

/* 
    commentUp = (e) => {
        // alert(commentValue.value.length);
        const myId = 'kdh24';
        const commentValue = document.querySelector('.feedComment>ul');
        const newTagLi = document.createElement("li");
        const newTagP = document.createElement("p");
        const newTagA = document.createElement("a");

        let getCommentText = document.querySelector('form textarea');
        newTagA.innerHTML = myId + " ";
        newTagP.appendChild(newTagA);
        newTagP.append(getCommentText.value);
        console.log(getCommentText);
        getCommentText.value = "";

        newTagLi.appendChild(newTagP);
        commentValue.appendChild(newTagLi);
    } */
    render() {
        // let commentList = [];
        // let commentArr = this.state.commentArr;

        // let i = 0;
        // // console.log(commentArr.length)
        // while(i < commentArr.length){
        //     commentList.push(<li key={commentArr[i].id}><p><a>{commentArr[i].userId} </a>{commentArr[i].content}</p></li>);
        //     i = i + 1;
        // }
        // console.log(this.state.commentArr);

        return(
        <>
            <main>
                <div id="feeds">
                    <div id="feedOnTop">
                        <ul>
                            <li>
                                <button>
                                    <img alt="더 피커" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/26869616_2317743801831782_9081632034413084672_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=tupDzr9HTDgAX_1bCEC&ccb=7-4&oh=1c248fbfa62e0e36910e53522de65ec5&oe=60866584&_nc_sid=7bff83" />
                                    <div></div>
                                    <span>picker</span>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <div></div>
                                    <img alt="한살림" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/61803512_2281741025476680_2611456685675380736_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=PADUnRC1KS0AX9nGiep&ccb=7-4&oh=0d62ffcff9dfa1d6f47be789bd6360e2&oe=60876D92&_nc_sid=a9513d" />
                                    <span>hansalimseoul</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div id="feedBox">
                        <div class="feedHeader">
                            <div>
                                <a>
                                    <img src="https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/133025381_748982945998776_2323267199294891059_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=1YeX_WTQc8EAX8ooTRi&ccb=7-4&oh=d17992bc4e2676ce9ee19627f21238d2&oe=608A5E5D&_nc_sid=7b02f1" />
                                </a>
                                <a>
                                    <span>_apink_pinkpanda</span>
                                </a>
                            </div>
                            <button>
                                <div></div>
                            </button>
                        </div>
                        <img class="feedImg" src="https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-15/e35/166051867_241978567670763_6843313592569729111_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=dB39pO3HOI8AX8N17ZC&ccb=7-4&oh=7432b1e05622c439680eb57ab890faff&oe=60889045&_nc_sid=7b02f1" />
                        <div class="feedIcons">
                            <div class="heartRepleDmBox">
                                <button>
                                    <img alt="좋아요" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjUxMS42MjZweCIgaGVpZ2h0PSI1MTEuNjI2cHgiIHZpZXdCb3g9IjAgMCA1MTEuNjI2IDUxMS42MjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS42MjYgNTExLjYyNjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQ3NS4zNjYsNzEuOTQ5Yy0yNC4xNzUtMjMuNjA2LTU3LjU3NS0zNS40MDQtMTAwLjIxNS0zNS40MDRjLTExLjgsMC0yMy44NDMsMi4wNDYtMzYuMTE3LDYuMTM2DQoJCWMtMTIuMjc5LDQuMDkzLTIzLjcwMiw5LjYxNS0zNC4yNTYsMTYuNTYyYy0xMC41NjgsNi45NDUtMTkuNjUsMTMuNDY3LTI3LjI2OSwxOS41NTZjLTcuNjEsNi4wOTEtMTQuODQ1LDEyLjU2NC0yMS42OTYsMTkuNDE0DQoJCWMtNi44NTQtNi44NS0xNC4wODctMTMuMzIzLTIxLjY5OC0xOS40MTRjLTcuNjE2LTYuMDg5LTE2LjcwMi0xMi42MDctMjcuMjY4LTE5LjU1NmMtMTAuNTY0LTYuOTUtMjEuOTg1LTEyLjQ2OC0zNC4yNjEtMTYuNTYyDQoJCWMtMTIuMjc1LTQuMDg5LTI0LjMxNi02LjEzNi0zNi4xMTYtNi4xMzZjLTQyLjYzNywwLTc2LjAzOSwxMS44MDEtMTAwLjIxMSwzNS40MDRDMTIuMDg3LDk1LjU1LDAsMTI4LjI4NiwwLDE3MC4xNg0KCQljMCwxMi43NTMsMi4yNCwyNS44OTEsNi43MTEsMzkuMzk4YzQuNDcxLDEzLjUxNCw5LjU2NiwyNS4wMzEsMTUuMjc1LDM0LjU0NmM1LjcwOCw5LjUxNCwxMi4xODEsMTguNzkyLDE5LjQxNCwyNy44MzQNCgkJYzcuMjMzLDkuMDQxLDEyLjUxOSwxNS4yNzIsMTUuODQ2LDE4LjY5OGMzLjMzLDMuNDI2LDUuOTQ4LDUuOTAzLDcuODUxLDcuNDI3TDI0My4yNSw0NjkuOTM4DQoJCWMzLjQyNywzLjQyNiw3LjYxNCw1LjE0NCwxMi41NjIsNS4xNDRzOS4xMzgtMS43MTgsMTIuNTYzLTUuMTQ0bDE3Ny44Ny0xNzEuMzFjNDMuNTg4LTQzLjU4LDY1LjM4LTg2LjQwNiw2NS4zOC0xMjguNDcyDQoJCUM1MTEuNjI2LDEyOC4yNzksNDk5LjU0LDk1LjU0Niw0NzUuMzY2LDcxLjk0OXogTTQyMS40MDUsMjcxLjc5NUwyNTUuODEzLDQzMS4zOTFMODkuOTM4LDI3MS41MDcNCgkJQzU0LjM0NCwyMzUuOTIyLDM2LjU1LDIwMi4xMzMsMzYuNTUsMTcwLjE1NmMwLTE1LjQxNSwyLjA0Ni0yOS4wMjYsNi4xMzYtNDAuODI0YzQuMDkzLTExLjgsOS4zMjctMjEuMTc3LDE1LjcwMy0yOC4xMjQNCgkJYzYuMzc3LTYuOTQ5LDE0LjEzMi0xMi42MDcsMjMuMjY4LTE2Ljk4OGM5LjE0MS00LjM3NywxOC4wODYtNy4zMjgsMjYuODQtOC44NWM4Ljc1NC0xLjUyLDE4LjA3OS0yLjI4MSwyNy45NzgtMi4yODENCgkJYzkuODk2LDAsMjAuNTU3LDIuNDI0LDMxLjk3Nyw3LjI3OWMxMS40MTgsNC44NTMsMjEuOTM0LDEwLjk0NCwzMS41NDUsMTguMjcxYzkuNjEzLDcuMzMyLDE3Ljg0NSwxNC4xODMsMjQuNywyMC41NTcNCgkJYzYuODUxLDYuMzgsMTIuNTU5LDEyLjIyOSwxNy4xMjgsMTcuNTU5YzMuNDI0LDQuMTg5LDguMDkxLDYuMjgzLDEzLjk4OSw2LjI4M2M1LjksMCwxMC41NjItMi4wOTQsMTMuOTktNi4yODMNCgkJYzQuNTY4LTUuMzMsMTAuMjgtMTEuMTgyLDE3LjEzMS0xNy41NTljNi44NTItNi4zNzQsMTUuMDg1LTEzLjIyMiwyNC42OTQtMjAuNTU3YzkuNjEzLTcuMzI3LDIwLjEyOS0xMy40MTgsMzEuNTUzLTE4LjI3MQ0KCQljMTEuNDE2LTQuODU0LDIyLjA4LTcuMjc5LDMxLjk3Ny03LjI3OXMxOS4yMTksMC43NjEsMjcuOTc3LDIuMjgxYzguNzU3LDEuNTIxLDE3LjcwMiw0LjQ3MywyNi44NCw4Ljg1DQoJCWM5LjEzNyw0LjM4LDE2Ljg5MiwxMC4wNDIsMjMuMjY3LDE2Ljk4OGM2LjM3Niw2Ljk0NywxMS42MTIsMTYuMzI0LDE1LjcwNSwyOC4xMjRjNC4wODYsMTEuNzk4LDYuMTMyLDI1LjQwOSw2LjEzMiw0MC44MjQNCgkJQzQ3NS4wNzgsMjAyLjEzMyw0NTcuMTksMjM2LjAxNiw0MjEuNDA1LDI3MS43OTV6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
                                </button>
                                <button>
                                    <a>
                                        <i class="far fa-comment"></i>
                                    </a>
                                </button>
                                <button>
                                    <a><img alt="공유" src="data:image/png;base64,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" /></a>
                                </button>
                            </div>
                            <div class="saveBox">
                                <button>
                                    <i class="far fa-bookmark"></i>
                                </button>
                            </div>
                        </div>
                        <div class="feedLikeCnt">
                            <p>좋아요 <span>351</span>개</p>
                        </div>
                        <div class="feedComment">
                            <ul>
                                    <Comments key={this.state.commentArr.id}
                                    commentArr={this.state.commentArr}
                                    />
                            </ul>
                        </div>
                        <div class="feedTime">
                            <a><span>22시간</span> 전</a>
                        </div>
                        <div class="commentUpBox">
                            <form action="#" method="POST">
                                <button>
                                    <i class="far fa-smile fa-5x"></i>
                                </button>
                                <textarea type="text" placeholder="댓글 달기..." 
                                onChange={this.commentChange}
                                onKeyDown={this.textareaKeyDown} 
                                onKeyUp={this.textareaKeyUp}
                                value={this.state.comment}
                                ></textarea>
                                <button 
                                className={'commentUpButton ' + (this.state.buttonDisable ? 'commentUploadFalse' : 'commentUpload') } 
                                type="button" disabled={this.state.buttonDisable}
                                onClick={this.commentUp}
                                // disabled={this.state.disValue}
                                >
                                    게시
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="main-right">

                </div>
            </main>
        </>
        )
    }
}
export default Feeds 