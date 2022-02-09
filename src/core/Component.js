export default class Component {
  $target;
  $props; // 부모 컴포넌트가 자식 컴포넌트에게 상태 혹은 메소드를 넘겨주기 위함.
  $state;

  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.render();
    this.setEvent();
  }
  setup() {}
  mounted() {} // render 이후 추가적인 기능 수행을 위한 메소드
  template() {
    return '';
  }
  render() {
    this.$target.innerHTML = this.template();
    this.mounted(); // render 후에 mounted 가 실행.
  }

  setEvent() {}
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }

  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];

    // selector 에 명시한 것 보다 더 하위 요소가 선택되는 경우가 있을 땐
    // closest 를 이용하여 처리
    const isTarget = (target) => children.includes(target) || target.closest(selector);

    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
