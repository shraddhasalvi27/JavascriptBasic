// going to leran js-DOM concepts
//how we can Link js file with html
// 1)to load js file in head tag - it is not good way as browser will stop at that line
                                //    and start parsing if we are using any html code in our js file then it will give me error
                                //    and it wil stop working that is the reason
// 2)to load js file at the end of body - first file will get load and then execute
                                        // -html parsing,js load and then execute js - it will take time
// 3)html parsing and js loading will be asynchronous - that is asynchronous
    // add async to link                                     // async word add to link
                                                            // in asynchronous it will wait to load and the execute again time consuming

// 4)add defer - loading and parsing at the same time - here loading is happening in background
