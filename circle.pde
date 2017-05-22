class Circle extends Shape2d{
  private int csize=100;
  private int cspeed=5;
  private float ratio=1.25;
  private float diameter;
  private float coordinate_x;
  private float coordinate_y;
  private float speed_x;
  private float speed_y;
  private color colour;
  private boolean visible;

  //getters and setters - needed only if the "outside world" needs that
  public float getDiameter() {
    return diameter;
  }
  public float getRadius() {
    return diameter/ratio;
  }
  public void setDiameter(float diameter) {
    this.diameter=diameter;
  }
  public float getX() {
    return coordinate_x;
  }
  public float getY() {
    return coordinate_y;
  }

  public boolean isVisible() {
    return visible;
  }

  public void setVisibility(boolean visibility) {
    this.visible=visibility;
  }

  //constructor - optional, java can create automatically
  Circle() {
    diameter=random(csize/ratio, csize);
    coordinate_x=random(diameter/2, width-diameter/2);
    coordinate_y=random(diameter/2, height-diameter/2);
    speed_x=random(-cspeed, cspeed);
    speed_y=random(-cspeed, cspeed);
    colour=color(random(255), random(255), random(255), 128);
    visible=true;
  }

  //methods or functions 
  void Draw() {
    if (this.isVisible()) {
      fill(colour);
      ellipse(coordinate_x, coordinate_y, diameter, diameter);
    }
  }

  void Update() {
    if (this.isVisible()) {
      coordinate_x +=speed_x ; //move x direction with corresponding speed
      coordinate_y +=speed_y ; //move y direction with corresponding speed
      if ((coordinate_x >width-diameter /2) || (coordinate_x <diameter /2)) { //if we reach the horizontal edges, then set the speed opposite
        speed_x =-speed_x ;
      }
      if ((coordinate_y >height-diameter /2) || (coordinate_y <diameter /2)) { //if we reach the horizontal edges, then set the speed opposite
        speed_y =-speed_y ;
      }
    }
  }

  boolean isInside() {
    return dist(this.getX(), this.getY(), mouseX, mouseY)<this.getRadius();
  }
}