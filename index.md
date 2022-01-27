<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BetaBanta coming soon page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="wrapper">
        <div class="title">Our website is <span>Coming Soon</span>, follow us <br> for updates now</div>
        <form action="" class="form">
            <div class="email-field">
                <input type="email" placeholder="Enter Email" id="">
                <button>Subscribe</button>
            </div>
        </form>
        <div class="count-down">
            <div class="timer day">
                <div class="count">
                    <div class="numb">00</div>
                    <div class="text">Days</div>
                </div>
            </div>
            <div class="clone">:</div>
            <div class="timer hour">
                <div class="count">
                    <div class="numb">00</div>
                    <div class="text">Hours</div>
                </div>
            </div>
            <div class="clone">:</div>
            <div class="timer min">
                <div class="count">
                    <div class="numb">00</div>
                    <div class="text">Minutes</div>
                </div>
            </div>
            <div class="clone">:</div>
            <div class="timer sec">
                <div class="count">
                    <div class="numb">00</div>
                    <div class="text">Seconds</div>
                </div>
            </div>
        </div>
    </div>

    <script>
        const day = document.querySelector(".day .numb")
        const hour = document.querySelector(".hour .numb")
        const min = document.querySelector(".min .numb")
        const sec = document.querySelector(".sec .numb")

        let timer = setInterval(() => {
            
            let currentDate = new Date().getTime();
            let launchDate = new Date('Sep 18, 2022 13:00:00').getTime();
            let duration = launchDate - currentDate;
            let days = Math.floor(duration / (1000 * 60 * 60 * 24));
            let hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((duration % (1000 * 60)) / 1000);
            day.innerHTML = days;
            hour.innerHTML = hours;
            min.innerHTML = minutes;
            sec.innerHTML = seconds;

            if(days < 10) {
                day.innerHTML = '0' + days;
            }
            if(hours < 10) {
                hour.innerHTML = '0' + hours;
            }
            if(minutes < 10) {
                min.innerHTML = '0' + minutes;
            }
            if(seconds < 10) {
                sec.innerHTML = '0' + seconds;
            }
            if(duration < 0) {
                clearInterval(timer);
            }
            
        }, 1000)
    </script>
</body>
</html>

## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/okunadewaleeyah/okunadewaleeyah.github.io/edit/main/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/okunadewaleeyah/okunadewaleeyah.github.io/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
