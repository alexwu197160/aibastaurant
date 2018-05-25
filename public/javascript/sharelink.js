<!-- fb share-- > -->
<div id="fb-root"></div>
    <script>
        (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.12&appId=1978751225731215&autoLogAppEvents=1';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    </script>

    <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="true"
        data-auto-logout-link="true" data-use-continue-as="true">
    </div>


    
    <p>Click the button below to trigger a Share Dialog</p>
    <div id="shareBtn" class="btn btn-success clearfix">Share</div>
    <script>
        document.getElementById('shareBtn').onclick = function () {
            FB.ui({
                method: 'share',
                display: 'popup',
                href: 'https://developers.facebook.com/docs/',
            }, function (response) { });
        }
    </script>