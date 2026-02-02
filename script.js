// 平滑滚动导航
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 滚动时添加导航栏阴影效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// 页面加载动画
document.addEventListener('DOMContentLoaded', function() {
    // 为技能卡片添加进入动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 观察所有卡片
    document.querySelectorAll('.skill-card, .project-card').forEach(card => {
        observer.observe(card);
    });
});

// 简单的控制台欢迎消息
console.log('%c欢迎来到我的个人网页！', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c这个网站是使用HTML、CSS和JavaScript创建的。', 'color: #764ba2; font-size: 14px;');
