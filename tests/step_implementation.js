/* globals gauge*/
"use strict";
const path = require('path');
/*const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate
} = require('taiko');
//*/

const { openBrowser, goto, click, write, press, textBox, button, closeBrowser, $, toRightOf, below, scrollDown, scrollTo, scrollUp } = require('taiko');

const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});

afterSuite(async () => {
    await closeBrowser();
});

/*/ Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};//*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

step("Reddit", async () => {
    //LogIn part
    await goto('reddit.com');
    await click('Log In');
    await click(textBox('Username'));
    await write('QA_junior', textBox('Username'));
    await click(textBox('Password'));
    await write('bestPassword', textBox('Password'));
    await click(button('Log In'));
    //Interests part
    await sleep(15000);
    try {
        await click($('//button[@aria-label="Close"]'));
    } catch (error){
        return null;
    }
    //FindPost
    await click(textBox('Search Reddit'));
    await write('r/test Test post for testing purposes.');
    await click($('//i[@class="icon icon-search"]'));
    await sleep(3000);
    await click('Test post for testing purposes.', below('r/test'));
    //LikePost
    await sleep(3000);
    await click($('//button[@data-click-id="upvote"]'));
    await sleep(3000);
    await click($('//button[@data-click-id="upvote"]'));
    await sleep(3000);
    await click($('//button[@data-click-id="upvote"]'));
    //DislikePost
    await sleep(3000);
    await click($('//button[@data-click-id="downvote"]'));
    await sleep(3000);
    await click($('//button[@data-click-id="downvote"]'));
    //WriteComment
    await scrollUp($('//div[@id="overlayScrollContainer"]'), -500);
    await click($('//div[@class="DraftEditor-editorContainer"]'));
    await write('I\'m TEEEEST!!!');
    await click(button('Comment'));
    //KeepComment
    await sleep(5000);
    await scrollUp($('//div[@id="overlayScrollContainer"]'), -1000);
    await click($('//button[@aria-label="more options"]'), toRightOf('Edit'), below('Markdown Mode'));
    await click('Delete comment');
    await click('Keep');
    //DeleteComment
    await click($('//button[@aria-label="more options"]'), toRightOf('Edit'), below('Markdown Mode'));
    await click('Delete comment');
    await click('Delete');
    //LogOut
    await click('Close');
    await click($('//button[@id="USER_DROPDOWN_ID"]'));
    await click('Log Out');
    await sleep(5000);
    //*/
});

//

step("LogIn", async () => {
    await goto('reddit.com');
    await sleep(5000);
    await click('Log In');
    await click(textBox('Username'));
    await write('QA_junior', textBox('Username'));
    await click(textBox('Password'));
    await write('bestPassword', textBox('Password'));
    await click(button('Log In'));
});

step("Interests", async () => {
    await sleep(15000);
    try {
        await click($('//button[@aria-label="Close"]'));
    } catch (error){
        return null;
    }
});

step("FindPost", async () => {
    await click(textBox('Search Reddit'));
    await write('r/test Test post for testing purposes.');
    await click($('//i[@class="icon icon-search"]'));
    await click('Test post for testing purposes.', below('r/test'));
});

step("LikePost", async () => {
    await sleep(3000);
    await click($('//button[@data-click-id="upvote"]'));
    await sleep(3000);
    await click($('//button[@data-click-id="upvote"]'));
    await sleep(3000);
    await click($('//button[@data-click-id="upvote"]'));
});

step("DislikePost", async () => {
    await sleep(3000);
    await click($('//button[@data-click-id="downvote"]'));
    await sleep(3000);
    await click($('//button[@data-click-id="downvote"]'));
});

step("WriteComment", async () => {
    await scrollUp($('//div[@id="overlayScrollContainer"]'), -500);
    await click($('//div[@class="DraftEditor-editorContainer"]'));
    await write('I\'m TEEEEST!!!');
    await click(button('Comment'));
});

step("KeepComment", async () => {
    await sleep(5000);
    await scrollUp($('//div[@id="overlayScrollContainer"]'), -1000);
    await click($('//button[@aria-label="more options"]'), toRightOf('Edit'), below('Markdown Mode'));
    await click('Delete comment');
    await click('Keep');
});

step("DeleteComment", async () => {
    await click($('//button[@aria-label="more options"]'), toRightOf('Edit'), below('Markdown Mode'));
    await click('Delete comment');
    await click('Delete');
});

step("LogOut", async () => {
    await click('Close');
    await click($('//button[@id="USER_DROPDOWN_ID"]'));
    await click('Log Out');
});//*/
