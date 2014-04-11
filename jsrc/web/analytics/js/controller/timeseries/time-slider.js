/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['ojs/ojcore', 'knockout', 'jquery', '/analytics/js/common/ita-core.js',
    'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart', 'jqueryui',
    'ojs/ojdatetimepicker'], function(oj, ko, $, ita) {

    ita.registerTool(
            {
                name: 'time-slider',
                init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                    var vm = valueAccessor();
                    $.get('/analytics/html/timeseries/time-slider.html', function(resp) {
                        var $container = $(element);
                        $container.append(resp);
                        ko.applyBindings(vm, $(".time-filter")[0]);

                        var $sliderBar = $container.find(".slider-bar");
                        $sliderBar.slider({
                            range: true,
                            min: vm.totalStart().getTime(),
                            max: vm.totalEnd().getTime(),
                            values: [vm.viewStart().getTime(), vm.viewEnd().getTime()],
                            stop: function(event, ui) {
                                var newStart = ui.values[0];
                                if (newStart !== vm.viewStart().getTime()) {
                                    vm.viewStart(new Date(newStart));
                                }

                                var newEnd = ui.values[1];
                                if (newEnd !== vm.viewEnd().getTime()) {
                                    vm.viewEnd(new Date(newEnd));
                                }
                            },
                            slide: function() {
                                // draw the canvas
//                                var $sliderHandleLeft = $(".ui-slider-handle:eq(0)");
//                                var $sliderHandleRight = $(".ui-slider-handle:eq(1)");

                                var $topLine = $("svg:first line[y2=0]");
                                var $bottomLine = $("svg:first line:first");
                                if(!this.canvas) {
                                    var canvasHTML = "<canvas id='myCanvas' height='{height}' width='{width}' style='position:absolute;left:0;top:0;width:100%;hegith:100%;'></canvas>";
                                    $("body").append(canvasHTML.replace('{height}', $('body').height()).replace('{width}', $('body').width()));
                                    this.canvas = document.getElementById("myCanvas");
                                } 
                                var context = this.canvas.getContext("2d");
                                context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                                
                                context.beginPath();
                                
                                var start = $topLine.offset();
                                var width = $topLine.attr("x2") - $topLine.attr("x1");
                                var height = $bottomLine.offset().top - start.top;
                                
                                context.rect(start.left,start.top,width,height);
                                    
                                context.closePath();
                                context.fillStyle = "rgba(0,0,0,0.05)";
                                context.fill();
                                context.stroke();
                            }
                        });

                        var $splitterBar = $container.find(".splitter-bar");
                        var $scaleBar = $container.find(".scale-bar");
                        var drawSplitterScale = function() {
                            // constants
                            var HOUR = 60 * 60 * 1000;
                            var DAY = 24 * HOUR;

                            // Clean the two containers in case a redraw is triggered. 
                            $splitterBar.empty();
                            $scaleBar.empty();

                            // Calculate the start distance and start date align at day.
                            var dVal = vm.totalEnd().getTime() - vm.totalStart().getTime();
                            var splitterDistance = $scaleBar.width() * (DAY / dVal);
                            var startDate = Math.ceil(vm.totalStart().getTime() / DAY) * DAY;
                            var startPos = (startDate - vm.totalStart().getTime()) / DAY * splitterDistance;

                            // Calculate the step in case there will be too many scales to draw.
                            var minSplitterDistance = 20;
                            var step = 1;
                            var precalculatedDistance = splitterDistance;
                            while (precalculatedDistance < minSplitterDistance) {
                                step++;
                                precalculatedDistance += splitterDistance;
                            }

                            // month const list. 
                            var MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                            var lastMonth = -1;
                            for (var currentPos = startPos, currentTime = startDate;
                                    currentPos < $scaleBar.width();
                                    currentPos += splitterDistance * step, currentTime += DAY * step) {
                                // Draw the splitter.        
                                var $splitter = $("<span></span>").css("left", currentPos + "px");
                                $splitterBar.append($splitter);
                                var currentTimeObj = new Date(currentTime);

                                // Calculate the scale text. 
                                var scaleText = '';
                                var currentMonth = currentTimeObj.getMonth();
                                // If it is the first time loop into the month,
                                // draw the date with the month prefix. Like: 'Apr 1'.
                                if (currentMonth !== lastMonth) {
                                    scaleText = MONTH_NAMES[currentMonth] + " ";
                                    lastMonth = currentMonth;
                                }
                                scaleText += currentTimeObj.getDate();

                                // Draw the scale.
                                var $scale = $("<span></span>").text(scaleText);
                                $scaleBar.append($scale);
                                // Adjust the scale to align to the middle of the splitter.
                                $scale.css("left", currentPos - $scale.width() / 2 + "px");
                            }
                        };

                        drawSplitterScale();
                        // Redraw the slider when browser window is resized.
                        $(window).resize(function() {
                            drawSplitterScale();
                        });

                        vm.viewStart.subscribe(function(newVal) {
                            $sliderBar.slider("values", [newVal.getTime(), vm.viewEnd().getTime()]);
                            fireViewRangeChange();
                        });
                        vm.viewEnd.subscribe(function(newVal) {
                            $sliderBar.slider("values", [vm.viewStart().getTime(), newVal.getTime()]);
                            fireViewRangeChange();
                        });
                        vm.totalStart.subscribe(function(newVal) {
                            $sliderBar.slider("option", "min", newVal.getTime());
                            drawSplitterScale();
                        });
                        vm.totalEnd.subscribe(function(newVal) {
                            $sliderBar.slider("option", "max", newVal.getTime());
                            drawSplitterScale();
                        });

                        function fireViewRangeChange() {
                            if (vm.viewRangeChange && typeof vm.viewRangeChange === 'function') {
                                vm.viewRangeChange(vm.viewStart(), vm.viewEnd());
                            }
                        }
                    });
                }
            }
    );

});