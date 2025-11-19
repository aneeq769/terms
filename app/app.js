// Fake TikTok user for sandbox demo
const tiktokUser = {
    username: "sandbox_user_123",
    open_id: "sandbox_openid_987654321"
};

// Display fake profile data
document.addEventListener("DOMContentLoaded", () => {
    let username = document.getElementById("username");
    let openid = document.getElementById("openid");

    if (username && openid) {
        username.innerText = tiktokUser.username;
        openid.innerText = tiktokUser.open_id;
    }
});
