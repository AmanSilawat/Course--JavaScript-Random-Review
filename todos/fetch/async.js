async function showAvatar() {
    // read github user
    let githubResponse = await fetch('https://api.github.com/users/amansilawat');
    let githubUser = await githubResponse.json();

    console.log(githubResponse);
    console.log('hello');

    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.style.cssText = `
        position: absolute;
        left: 10px;
        top: 10px;
    `;
    document.body.append(img);

    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 10000));
    img.remove();

    return githubUser;
}

showAvatar();