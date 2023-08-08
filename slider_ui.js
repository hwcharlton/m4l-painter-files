var margin = 4;

function paint()
{
  var val = box.getvalueof()[0];

  var viewsize = mgraphics.size;
  var width = viewsize[0];
  var height = viewsize[1];

  var sliderHeight = height - (margin * 2);
  var sliderWidth = width - (margin * 2);

  // Outer border
  mgraphics.set_source_rgba(box.getattr("tribordercolor"));
  mgraphics.rectangle(margin / 2, margin / 2, width - margin, height - margin);
  mgraphics.fill();

  // Background for slider
  mgraphics.set_source_rgba(box.getattr("tricolor"));
  mgraphics.rectangle(margin, margin, sliderWidth, sliderHeight);
  mgraphics.fill();

  var progress = percentProgress(val);

  var x1 = margin;
  var y1 = getSliderOffset(progress, sliderHeight, margin);
  var x2 = sliderWidth;
  var y2 = getSliderOffset(1 - progress, sliderHeight, margin);

  // Slider fill
  mgraphics.set_source_rgba(box.getattr("modulationcolor"));
  mgraphics.rectangle(x1, y1, x2, y2);
  mgraphics.fill();

  // Slider bar
  mgraphics.set_source_rgba(box.getattr("slidercolor"));
  mgraphics.rectangle(x1, y1, x2, margin);
  mgraphics.fill();
}

function percentProgress(val)
{
  var answer = val / 127;
  return answer;
}

function getSliderOffset(progress, height, margin) {
  var movementRange = height - margin;
  return movementRange * (1 - progress) + margin;
}
