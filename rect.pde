class Rect extends Shape2d{
  private int rsize=100;
  private int rspeed=5;
  private float ratio=1.25;
  private float size;
  private float coordinate_x;
  private float coordinate_y;
  private float speed_x;
  private float speed_y;
  private color colour;
  private boolean visible;

  //getters and setters - needed only if the "outside world" needs that
  public float getSize() {
    return size;
  }
  public void setSize(float size) {
    this.size=size;
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

  //constructor - optional, java cann create automatically
  Rect() {
    size=random(rsize/ratio, rsize);
    coordinate_x=random(0, width-size);
    coordinate_y=random(0, height-size);
    speed_x=random(-rspeed, rspeed);
    speed_y=random(-rspeed, rspeed);
    colour=color(random(255), random(255), random(255), 128);
    visible=true;
  }

  //methods or functions
  void Draw() {
    if (this.isVisible()) {
      fill(colour);
      rect(coordinate_x, coordinate_y, size, size);
    }
  }

  void Update() {
    if (this.isVisible()) {
      coordinate_x +=speed_x ; //move x direction with corresponding speed
      coordinate_y +=speed_y ; //move y direction with corresponding speed
      if ((coordinate_x >width-size) || (coordinate_x <0)) { //if we reach the horizontal edges, then set the speed opposite
        speed_x =-speed_x ;
      }
      if ((coordinate_y >height-size) || (coordinate_y <0)) { //if we reach the horizontal edges, then set the speed opposite
        speed_y =-speed_y ;
      }
    }
  }

  boolean isInside() {
    return mouseX>this.getX()&&mouseX<this.getX()+this.getSize()&&mouseY>this.getY()&&mouseY<this.getY()+this.getSize();
  }
}