/**
 * Non-public global class to handle the "default" FlashMessage instance to global use
 */
class FlashMessageManager {
  stack = [];
  register(_ref) {
    if ("_id" in _ref) {
      this.stack.push(_ref);
    }
  }
  unregister(_ref) {
    this.stack = this.stack.filter(item => item._id === _ref.id);
  }
  getDefault() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1];
  }
}

export default new FlashMessageManager();
