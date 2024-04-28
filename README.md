# vitepress-demo
Use custom Layout, markdown at Content area not render in preview mode.

## Question description
- When there is development mode, everything is ok.
- In preview mode, when coming form a direct route link or refresh page, the markdown of the content do not render.

## Reproduction problem:
- come in page `/`
- click button `to guide page`, then route to page `/guide`, now is ok.
- then refresh the page at `/guide`, the content area not render.


This issue is indeed quite important, because as for a document website, we often hope others come in through a detail page url.

I have been troubled for days. I guess the reason is used custom layout, because there is no such issue when using the default theme. I trying to find relative issues and office documents exist but have no results. 

Could you please take some time to help take a look.

## Resolution
https://github.com/vuejs/vitepress/issues/3831