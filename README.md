# maplocation.JS #

## What does maplocation.JS do? ##

maplocation is a jQuery-plugin that can display a map and even locate your position. 
The position is displayed with a marker. 

## Options ##

### Thresholds ###

```$(function(){
		//56.180898,15.591123
		$(this).maplocation({
				divlocation:"bth",
      			zoomlevel: 13,
				color: "yellow",
				sizex: 400,
				sizey: 400,
				latdef: 56.180898,
    			londef: 15.591123,
				myposition: false
		});
    });
```

```$(function(){
		//56.180898,15.591123
		$(this).maplocation({
				divlocation:"bth",
      			zoomlevel: 13,
				color: "yellow",
				sizex: 400,
				sizey: 400,
				latdef: 0,
    			londef: 0,
				myposition: true
		});
    });
```