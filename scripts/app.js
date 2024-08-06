/**
 * @author: Misael Bandeira Silveira <misaelsileveira at unisc dot br>
 * @version: 1.0
 * @date: 2023-30-06
 * @description: This script get url from input and format as a link to be used in Moodle external tool
 */

$(document).ready(function () {
    $('#text').submit(function (event) {
        event.preventDefault();
        $('#step-text').modal({ fadeDuration: 500, fadeDelay: 1, closeClass: 'icon-remove' });
    });
    $('#video').submit(function (event) {
        event.preventDefault();
        $('#step-video').modal({ fadeDuration: 500, fadeDelay: 1, closeClass: 'icon-remove' });
    });
    $('#block').submit(function (event) {
        event.preventDefault();
        $('#block-content').modal({ fadeDuration: 500, fadeDelay: 1, closeClass: 'icon-remove' });
    });
    $('#banner-moodle').submit(function (event) {
        event.preventDefault();
        $('#banner-moodle-content').modal({ fadeDuration: 500, fadeDelay: 1, closeClass: 'icon-remove' });
    });
});