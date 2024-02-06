const playTime = 10;

let score = 0;
let time = playTime;
// 게임 끝나는게 기본으로 깔려 있으며(3)
let isPlaying =false;
let timeInterval;
let cheakInterval;
let words = [];

let wordInput = document.querySelector('.word-input')
let wordDisplay = document.querySelector('.word')
let gameScore = document.querySelector('.score')
let gameTime = document.querySelector('.time')
let button = document.querySelector('.button')


init();
// 처음 들어가야할 내용들
function init(){
    getWord();
    wordInput.addEventListener('input', cheakMatch)
}

// 버튼 누르면 게임시작 
function run(){
    // 게임을 시작하기위해 버튼을 누르면 게임이 꺼져있던걸 켜짐으로 바꿔야함(4))
        if(isPlaying){
            return;
        }
        isPlaying =true;
        time = playTime;
        wordInput.focus();
        gameScore.innerText = 0;
        timeInterval = setInterval(countDown, 1000);
        cheakInterval= setInterval(checkStatus, 50)
        changeButton('게임중')
    }

    
// 게임이 실행중인지 실시간 체크
function checkStatus(){
    if(!isPlaying && time === 0){
        changeButton('게임시작')
        clearInterval(clearInterval)

    }
}

// 단어 불러오기 api 사용
function getWord(){
    axios.get('https://random-word-api.herokuapp.com/word?number=1000')
    .then(function (response) {
        response.data.forEach((word) => {
            if(word.length <10){
                words.push(word);
            }
        });
        changeButton('게임시작')
    })
    .catch(function (error) {
      // handle error
    console.log(error);
    })

}


// 내용이 같을 경우 스코어가 증가
function cheakMatch(){
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        wordInput.value ='';
        if(!isPlaying){   
            return;
        }
        score++; 
        gameScore.innerText = score;
        time = playTime;
        const randomIndex = Math.floor(Math.random()*words.length);
        wordDisplay.innerText = words[randomIndex];
    };   
}



function countDown(){
                        // 게임 끝 (1)
    time > 0 ? time-- : isPlaying = false; 
    if(!isPlaying){
        // 게임 끝나면 타임도 멈춤 (2)
        clearInterval(timeInterval)
    }
    gameTime.innerText = time;
}

// 버튼의 글이 게임시작일 경우 loading css가 붙고 안 붙고
function changeButton(text){
    button.innerText = text;
    text === '게임시작' ? button.classList.remove('loading') :  button.classList.add('loading');

}

