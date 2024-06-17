
<script setup>
import { reactive, computed } from 'vue';
import { RouterLink, RouterView } from 'vue-router'; // Vue Router의 RouterLink와 RouterView를 가져옵니다.

// 리액티브 상태 정의
const state = reactive({
  orderItems: [
    { name: '아이스 카페라떼', price: 4800, quantity: 1 },
    { name: '아이스 아메리카노', price: 4500, quantity: 2 },
    { name: '블루베리 스무디', price: 5500, quantity: 1 },
    { name: '딸기 라떼', price: 2500, quantity: 3 }
  ]
});

// 수량 업데이트 메소드
const updateQuantity = (index, delta) => {
  let newQuantity = state.orderItems[index].quantity + delta;
  // 최소 수량이 1개 이상이 되도록 제한
  if (newQuantity < 1) {
    newQuantity = 1;
  }
  state.orderItems[index].quantity = newQuantity;
};

// 총 주문 수량 및 총 가격 계산을 위한 컴퓨티드 속성
const total = computed(() => {
  const totalQuantity = state.orderItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = state.orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return {
    quantity: totalQuantity,
    formattedPrice: totalPrice.toLocaleString() + '원'
  };
});
</script>

