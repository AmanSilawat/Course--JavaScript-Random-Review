const input = document.getElementById('password');
const domCapsWarn = document.getElementById('capsLockWarn');


input.addEventListener('keyup', function (e) {
    console.log(e);
    const isCapsLockOn = e.getModifierState('CapsLock');
    domCapsWarn.style.display = isCapsLockOn ? 'block' : 'none';
})