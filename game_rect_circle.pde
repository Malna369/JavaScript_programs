import java.util.HashSet;
import java.util.Iterator;
int cnumber=8;
int rnumber=6;
int penalty=2;
//Circle[] circles=new Circle[100];
//Rect[] rects=new Rect[120];
HashSet<Circle> circles=new HashSet<Circle>();
HashSet<Rect> rects=new HashSet<Rect>();

//SETUP BEGINS HERE
void setup() {
  size(1024, 480);
  int i;
  for (i=0; i<cnumber; i=i+1) {
    circles.add(new Circle());
  }
  for (i=0; i<rnumber; i=i+1) {
    rects.add(new Rect());
  }
  strokeWeight(2);
  stroke(70, 140, 155);
  frameRate(30);
  println("CIRCLES: ", circles.size());
  println("RECTS: ", rects.size());
}

//DRAW BEGINS HERE
void draw() {
  background(200, 200, 200); 
  for (Circle circle : circles) {
    circle.Draw();
    circle.Update();
  }
  for (Rect rect : rects) {
    rect.Draw();
    rect.Update();
  }
}

//INTERACTIVITY
void mousePressed() {
  boolean cflag=false;
  Iterator<Circle> it=circles.iterator();
  while (it.hasNext()) {
    Circle circle=it.next();
    if (circle.isInside()&&circle.isVisible()) {
      it.remove();
      println("-------------------------");
      println("CIRCLES: ", circles.size());
      println("RECTS: ", rects.size());
      cflag=true;
    }
  }

  Iterator<Rect> itr=rects.iterator();
  while (itr.hasNext()) {
    Rect rect=itr.next();
    if (rect.isInside()&&rect.isVisible()) {
      itr.remove();
      println("-------------------------");
      println("CIRCLES: ", circles.size());
      println("RECTS: ", rects.size());
      cflag=true;
    }
  }

  if (!cflag) {
    for (int i=0; i<penalty; i=i+1) {
      circles.add(new Circle());
      rects.add(new Rect());
      println("-------------------------");
      println("CIRCLES: ", circles.size());
      println("RECTS: ", rects.size());
    }
  }
}