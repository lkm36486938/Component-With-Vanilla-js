# Vanilla JS 만을 사용하여 컴포넌트 만들어보기
황준일님의 블로그 코드카피

## 출처
https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_1-%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%E1%84%8B%E1%85%B4-%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A2%E1%86%BC


## 모듈화
### 폴더구조
```
.
├── index.html
└── src
    ├── app.js              # ES Module의 entry file
    ├── components          # Component 역할을하는 것들
    │   └── Items.js
    └── core                # 구현에 필요한 코어들
        └── Component.js
```