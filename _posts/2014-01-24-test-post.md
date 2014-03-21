---
title: Web Components - is this the future?
layout: post
excerpt:  Maecenas lobortis in justo sed fringilla. ullam feugiat aliquet nisi. 
tags : [Jekyll]
---

You're in! Nice. We've put together a little post to introduce you to the Ghost editor and get you started. Go ahead and edit this post to get going and learn how it all works!

## Getting Started

Writing in markdown is really easy. In the left hand panel of Ghost, you simply write as you normally would. Where appropriate, you can use *formatting* shortcuts to style your content. For example, a list:

* Item number one
* Item number two
    * A nested item
* A final item

or with numbers!

1. Remember to buy some milk
2. Drink the milk
3. Tweet that I remembered to buy the milk, and drank it

### Links

Want to link to a source? No problem. If you paste in url, like http://ghost.org - it'll automatically be linked up. But if you want to customise your anchor text, you can do that too! Here's a link to [the Ghost website](http://ghost.org). Neat.

### What about Images?

Images work too! Already know the URL of the image you want to include in your article? Simply paste it in like this to make it show up:

Not sure which image you want to use yet? That's ok too. Leave yourself a descriptive placeholder and keep writing. Come back later and drag and drop the image in to upload:


### Quoting

Sometimes a link isn't enough, you want to quote someone on what they've said. It was probably very wisdomous. Is wisdomous a word? Find out in a future release when we introduce spellcheck! For now - it's definitely a word.

> Wisdomous - it's definitely a word.

### Working with Code

Got a streak of geek? We've got you covered there, too. You can write inline `<code>` blocks really easily with back ticks. Want to show off something more comprehensive? 4 spaces of indentation gets you there.

    .awesome-thing {
        display: block;
        width: 100%;
    }

### Ready for a Break? 

Throw 3 or more dashes down on any new line and you've got yourself a fancy new divider. Aw yeah.

---

### Advanced Usage

There's one fantastic secret about Markdown. If you want, you can  write plain old HTML and it'll still work! Very flexible.

<input type="text" placeholder="I'm an input field!" />

That should be enough to get you started. Have fun - and let us know what you think :)


You're in! Nice. We've put together a little post to introduce you to the Ghost editor and get you started. Go ahead and edit this post to get going and learn how it all works!

#Heading 1

##Heading 2

###Heading 3

####Heading 4

#####Heading 5

######Heading 6

We've put together a little post to introduce you to the Ghost editor and get you started.

#Heading 1

We've put together a little post to introduce you to the Ghost editor and get you started.

##Heading 2

We've put together a little post to introduce you to the Ghost editor and get you started.

###Heading 3

We've put together a little post to introduce you to the Ghost editor and get you started.

####Heading 4

We've put together a little post to introduce you to the Ghost editor and get you started.

#####Heading 5

We've put together a little post to introduce you to the Ghost editor and get you started.

######Heading 6

{% highlight js %}
function handleTweets(tweets){
	console.log(tweets);
    var x = tweets.length;
    var n = 0;
    var element = $(".tweets");
    var list= '';
    while(n < x) {
      list += '<li>' + tweets[n] + '</li>';
      n++;
    }
    element.html(list);
}
{% endhighlight %}
