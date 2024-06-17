<script setup>
    import { provide, ref, readonly } from "vue";
    import PropsChild from './PropsChild.vue'
    import DarkMode from "./DarkMode.vue";
    import ReadProps from "./ReadProps.vue";

    const message = ref("hello");
    const darkState = ref(false);
    const readValue = ref("vue는 재미있다.");

    // provide 는 공급자라는 뜻을 갖는다.
    // ref 반응형 변수를 boolean 타입으로 만듬
    // 실행시킬때마다 껐다켰다 할 수있따. 현재의 속성을 계속 부정해주고 있음
    // {}객체 형식으로 데이터를 전달해줌 -> 참조연산자처럼 다른 걸 참조할 수 있다. 

    // <!-- 템플릿은 없어지고 랜더링됨. 두가지의 형제 노드를 반환해줌. -->
    // <div :class="{container:true, dark:darkState}">
    //     <!-- 클래스 속성을 다중형식으로 동적으로 랜더링 됨 -->
    //     <!-- 뷰의 반응성 변수를 동적으로 할당해줌 -->
    // <!-- v-on 은 이벤트를 발생시킬 때 이렇게 묶어준다
    //     <img src=""> : 리터럴 타입으로 그 자체가 데이터다 변수에다가 이미지주소 입력하면 렌더링됨
    //     <img :scr=""> : 바인드 때문에 링크를 변수로 인식한다.  -->


    
    // 공급자
    provide("message", message);
    provide("darkState", darkState);
    provide("readValue", readonly(readValue));
    provide("childDark", readonly(darkState));
</script>
<!-- 
    prop
    부모에서 자식 컴포넌트로 데이터를 전달하는 경우 우리는 다양한 <slot>을 이용할 수 있었다.
    하지만 slot의 경우 콘텐츠를 전달하기 위해 사용하는 것으로 단일 데이터를 전달하는 경우 맞지 않으며
    부모에게 전달 받은 데이터를 전달하여 조작하는데도 어려움이 있다.
    이려한 경우 우리는 데이터만 전달하기 위한 용도로 props를 사용할 수 있다.
 -->
<template>
    <div :class="{container:true, dark:darkState}">
        props 입력 <input v-model="message"/>
    </div>
    <PropsChild/>
    <br>
    <DarkMode/>
    <ReadProps/>
</template>

<style scoped>
.container{
    border : 1px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dark{
    background-color: black;
    color: white;
}
</style>