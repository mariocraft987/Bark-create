function myFunction() {
    let message = document.getElementById('code').value
    location.href = "https://github.com/mariocraft987/bark.github.io/issues/new?template=bug_report&labels=comment&title=A%20message%20to%20the%20dev&body=" + message;
}