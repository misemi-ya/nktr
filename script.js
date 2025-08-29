document.addEventListener('DOMContentLoaded', function() {
    // スムーズスクロール
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // お問い合わせフォームの簡易的なバリデーション
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // ここでは実際の送信は行わず、メッセージを表示するだけ
            // サーバーサイドでの処理が必要な場合は、form actionとmethodを設定
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                alert('すべての項目を入力してください。');
                return;
            }

            if (!validateEmail(email)) {
                alert('有効なメールアドレスを入力してください。');
                return;
            }

            alert('お問い合わせありがとうございます！入力内容を確認後、ご連絡いたします。');
            contactForm.reset(); // フォームをリセット
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});