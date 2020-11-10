// detect when the page is hidden / visible
// event detects when the window is minimize
document.addEventListener('visibilitychange', function() {
    document.title = document.visibilityState;

    // both are same work
    console.log(document.visibilityState);
    console.log(document.hidden);
});