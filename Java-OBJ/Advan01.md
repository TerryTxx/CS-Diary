[back](https://github.com/TerryTxx/CS-Diary/blob/master/Java-OBJ/intermediateAdvan.md)

---


## Porject--Tank Battle


## [1.Java Graphics Coordinate System](#java-graphics-coordinate-system)

-----

## [2.Thread](#thread-usage)

--------------------

## Java Graphics Coordinate System
### 1. Utilize oop concepts such as encapsulation and inheritance
### [2. extends JPanel for mypanel](#mypanel-extends-jpanel)
### [3. Use jframe to create a game](#my-game-by-jframe)

We define the tank class, then our tank hero and local tank EnemyTank
- 1. Tank Class
```java
package tankgame;

/**
 * @version 1.0
 * @Authort Xiaoxu Tan
 */

public class Tank {
    private int x;//x-axis
    private int y;//y-axis
    private int direct;//0-up 1=right 2=down 3=left
    private int speed = 1;

    public void moveUp(){
        y -= speed;
    }
    public void moveDown(){
        y += speed;
    }
    public void moveRight(){
        x += speed;
    }
    public void moveLeft(){
        x -= speed;
    }
    public Tank(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    public int getDirect() {
        return direct;
    }

    public void setDirect(int direct) {
        this.direct = direct;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }
}
```
- 2. subclass of hero and enemy
```java
package tankgame;
/**
 * @version 1.0
 * @Authort Xiaoxu Tan
 * hero of my tank
 */
public class Hero extends Tank{
    public Hero(int x, int y) {
        super(x, y);
    }
}

public class EnemyTank extends Tank {

    public EnemyTank(int x, int y) {
        super(x, y);
    }
}
```
##### [back to list](#java-graphics-coordinate-system)

### myPanel extends JPanel
```java
package tankgame;

import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.Vector;

/**
 * @version 1.0
 * @Authort Xiaoxu Tan
 * drawing area for tank games
 */
//to listen keyboard, implement keylistener
public class myPanel extends JPanel implements KeyListener {
    //define my tank
    Hero hero = null;
    //define enemy tanks in Vector
    Vector<EnemyTank> enemyTanks = new Vector<>();
    int enemyTankSize = 3;
    public myPanel() {
        hero = new Hero(100,100);//initialize my tank
        hero.setSpeed(3);
        //initialize enemy tank
        for (int i = 0; i < enemyTankSize; i++) {
            EnemyTank enemyTank = new EnemyTank(100 * (i + 1), 0);
            enemyTank.setDirect(2);//tube to down
            enemyTanks.add(enemyTank);
        }
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.fillRect(0,0,1000,750);//fill the Rect
        drawTank(hero.getX(), hero.getY(), g, hero.getDirect(),0);
        for (int i = 0; i < enemyTanks.size(); i++) {
            //get current enemies
            EnemyTank enemyTank = enemyTanks.get(i);
            drawTank(enemyTank.getX(),enemyTank.getY(),g,enemyTank.getDirect(),1);
        }
    }
    //method to get the tank
    /**
     * @param x left top x-axis
     * @param y left top y-axis
     * @param g painting pen
     * @param direct tank moving direction
     * @param type of tank
     */
    public void drawTank(int x, int y, Graphics g,int direct, int type) {
        switch (type){
            //set the colour according the tank type
            case 0://our hero tank
                g.setColor(Color.cyan);
                break;
            case 1://enemy tank
                g.setColor(Color.yellow);
                break;
        }
        //draw the tank by the direction
        switch (direct){
            case 0://upper towards
                g.fill3DRect(x, y, 10, 60,false);//left wheel
                g.fill3DRect(x + 30, y, 10,60,false);//right wheel
                g.fill3DRect(x + 10, y + 10, 20,40,false);//rect cover
                g.fillOval(x + 10,y + 20,20,20);//oval cover
                g.drawLine(x+20,y+30,x+20,y);//tube
                break;
            case 1://right towards
                g.fill3DRect(x, y, 60, 10,false);//upper wheel
                g.fill3DRect(x, y + 30, 60,10,false);//lower wheel
                g.fill3DRect(x + 10, y + 10, 40, 20, false);//rect cover
                g.fillOval(x + 20,y + 10,20,20);//oval cover
                g.drawLine(x+30,y+20,x+60,y+20);//tube
                break;
            case 2://down towards
                g.fill3DRect(x, y, 10, 60,false);//left wheel
                g.fill3DRect(x + 30, y, 10,60,false);//right wheel
                g.fill3DRect(x + 10, y + 10, 20,40,false);
                g.fillOval(x + 10,y + 20,20,20);//oval cover
                g.drawLine(x+20,y+30,x+20,y+60);//tube
                break;
            case 3://left towards
                g.fill3DRect(x, y, 60, 10,false);//left wheel
                g.fill3DRect(x , y+ 30, 60, 10,false);//right wheel
                g.fill3DRect(x + 10, y + 10, 40,20,false);
                g.fillOval(x + 20,y + 10,20,20);//oval cover
                g.drawLine(x+30,y+20,x,y+20);//tube
                break;
            default:
                System.out.println("no changes at moment");
        }

    }

    @Override
    public void keyTyped(KeyEvent e) {

    }
    //wasd for direction
    @Override
    public void keyPressed(KeyEvent e) {
        if(e.getKeyCode() == KeyEvent.VK_W){
            //W key to change direction to upper
            hero.setDirect(0);
                //S2:change x,y to moving by moveXX()
            hero.moveUp();
        }else if(e.getKeyCode() == KeyEvent.VK_D){
            //W key to change direction to right
            hero.setDirect(1);
            hero.moveRight();
        }else if(e.getKeyCode() == KeyEvent.VK_S){
            //W key to change direction to down
            hero.setDirect(2);
            hero.moveDown();
        }else if(e.getKeyCode() == KeyEvent.VK_A){
            //W key to change direction to left
            hero.setDirect(3);
            hero.moveLeft();
        }
        //repaint the panel
        this.repaint();
    }

    @Override
    public void keyReleased(KeyEvent e) {
    }
}
```
##### [back to list](#java-graphics-coordinate-system)
### my game by jFrame
```java
package tankgame;

import javax.swing.*;
import java.awt.*;

/**
 * @version 1.0
 * @Authort Xiaoxu Tan
 */
public class game1 extends JFrame {
    //define mypanel
    myPanel mp = null;
    public static void main(String[] args) {
        game1 game1 = new game1();
    }
    public game1() {
        mp = new myPanel();
        this.add(mp);//mypanel is the drawing area
        this.setSize(1000,750);
        this.addKeyListener(mp);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setVisible(true);
    }
}
```
##### [back to list](#java-graphics-coordinate-system)

----------------
## Thread Usage
### 1.Thread Usage
- Extends Thread Class
- implements Runnable
- Start and run difference
### 2.Thread Methods
### 3.Thread Lifecycle
- interrupt
- join
- Daemon Thread
### 4. Synchronized
### 5. Mutex Lock
### 6.Deadlock

### tankGame 2.0
```text
we add function as player press J to control shoting 
and enemy can shot by them selves

Using thread concept
```
1. Hero Tank
```java
package tankGame3;

import java.util.Vector;

/**
 * @version 2.0
 * @Authort Xiaoxu Tan
 * hero of my tank
 * new requirements when user press J , our tank shot a bullet
 * (actually two threads)
 * 1. when a bullet out it should be a thread die when out of pannel or shotted
 * 2. MyPanel should be repainting to keep the bullet moving
 * 3. Hero's bullet will die by hit or out boundary, and could shoot multiply bullets--vector in thread
 * 4. Hero will be removed if be hit
 */
public class Hero extends Tank{
    // define a shot class
    Shot shot = null;//we tank can shot
    // shoot by multiply bullets
    Vector<Shot> shots = new Vector<>();
    public Hero(int x, int y) {
        super(x, y);
    }

    // define shot by press J
    public void shotEnemyTank(){

        if (shots.size() ==5){
            return;
        }
        // creat shot obj by Hero direct and X,Y
        switch (getDirect()){//Hero Object direct
            case 0:
                shot = new Shot(getX() + 20,getY(),0);
                break;
            case 1:
                shot = new Shot(getX() + 60,getY() +20,1);
                break;
            case 2:
                shot = new Shot(getX() + 20,getY() + 60,2);
                break;
            case 3:
                shot = new Shot(getX(),getY() + 20,3);
                break;
        }
        //start shot thread
        // then add responce in panel to J press of shoting
        shots.add(shot);
        new Thread(shot).start();
    }
}

```
##### [back to list](#java-graphics-coordinate-system)

2. EnemyTank
```java
package tankGame3;

import java.util.Vector;

/**
 * @version 2.0
 * @Authort Xiaoxu Tan
 * Enemy Tank
 * 1. Emeny can shot automatically
 *      (1)in the class vector to store multiply shots
 *      (2)when creat emenytank initialize a shot and start it
 *      (3) loop all emenytank vectors, show all the bullets
 * 2. hero's bullet attacked the Emenytanks, it should be dead
 * 3. Bomb showing
 * 4. Enemy tank move randomly--thread run randomly
 * 5. limit hero and Enemytank moving range
 * 6. Emeny shoot multy bulltes
 */
public class EnemyTank extends Tank implements Runnable{
    Vector<Shot> shots = new Vector<>();
//    boolean isLive = true;

    public EnemyTank(int x, int y) {
        super(x, y);
    }

    @Override
    public void run() {
        while (true){
            if ( isLive && shots.size() < 2){//no bullets now, add

                Shot s = null;
                // check direct and add
                switch(getDirect()){
                    case 0:
                        s = new Shot(getX()+20, getY(),0);
                        break;
                    case 1:
                        s = new Shot(getX()+60, getY()+20,1);
                        break;
                    case 2:
                        s = new Shot(getX()+20, getY()+60,2);
                        break;
                    case 3:
                        s = new Shot(getX(), getY()+20,3);
                        break;
                }
                shots.add(s);
                new Thread(s).start();
            }

            switch (getDirect()) {
                case 0:
                    for (int i = 0; i < 30; i++) {
                        if(getY() >0 ) {
                            moveUp();
                        }
                        try {
                            Thread.sleep(50);
                        } catch (InterruptedException e) {
                            throw new RuntimeException(e);
                        }
                    }
                    break;
                case 1:
                    for (int i = 0; i < 30; i++) {
                        if((getX() + 60) < 1000) {
                            moveRight();
                        }
                        try {
                            Thread.sleep(50);
                        } catch (InterruptedException e) {
                            throw new RuntimeException(e);
                        }
                    }
                    break;
                case 2:
                    for (int i = 0; i < 30; i++) {
                        if((getY()+60) < 750) {
                            moveDown();
                        }
                        try {
                            Thread.sleep(50);
                        } catch (InterruptedException e) {
                            throw new RuntimeException(e);
                        }
                    }
                    break;
                case 3:
                    for (int i = 0; i < 30; i++) {
                        if (getX() > 0) {
                            moveLeft();
                        }
                        try {
                            Thread.sleep(50);
                        } catch (InterruptedException e) {
                            throw new RuntimeException(e);
                        }
                    }
                    break;
            }
            setDirect((int)(Math.random()*4));
            // multi-thread check when the thread will stop
            if(!isLive){
                break;
            }
        }
    }
}

```
##### [back to list](#java-graphics-coordinate-system)
3. Shot
```java
package tankGame3;

/**
 * @version 2.0
 * @Authort Xiaoxu Tan
 */
public class Shot implements Runnable {
    int x;
    int y;
    int direct = 0;
    int speed = 2;//bullet speed
    boolean isLive = true; //to check the bullet is still running

    public Shot(int x, int y, int direct) {
        this.x = x;
        this.y = y;
        this.direct = direct;
    }
    @Override
    public void run() {
        while(true){
            // tread of the shot to show on the screen
            try {
                Thread.sleep(50);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            switch (direct){
                case 0://up
                    y -= speed;
                    break;
                case 1://right
                    x += speed;
                    break;
                case 2://down
                    y += speed;
                    break;
                case 3://left
                    x -= speed;
                    break;
            }
            System.out.println("Bullet x = "+x+" y = "+y);
            // if bullet out of boundary thread should be closed
            if(!(x >= 0 && x <= 1000 && y >=0 && y <= 750 && isLive)){
                System.out.println("this bullet thread is closed");
                isLive = false;//the bullet is not running
                break;
            }

        }
    }
}

```
##### [back to list](#java-graphics-coordinate-system)
4. MyPanel
```java
package tankGame3;

import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.Vector;

/**
 * @version 2.0
 * @Authort Xiaoxu Tan
 * drawing area for tank games
 */
//to listen keyboard, implement Keylistener
//to let panel re-drawing the bullet, to make Pannel implents runnable, as a thread
public class myPanel extends JPanel implements KeyListener,Runnable {
    //define my tank
    Hero hero = null;
    //define enemy tanks in Vector
    // delete tanks from vector
    Vector<EnemyTank> enemyTanks = new Vector<>();

    // define bombs in Vector
    // when bullet hits tanks, bomb shows
    Vector<Bomb> bombs = new Vector<>();
    int enemyTankSize = 3;

    // three pic of bombs
    Image ig1 = null;
    Image ig2 = null;
    Image ig3 = null;

    public myPanel() {
        hero = new Hero(500,100);//initialize my tank
        hero.setSpeed(3);

        //initialize enemy tank
        for (int i = 0; i < enemyTankSize; i++) {
            EnemyTank enemyTank = new EnemyTank(100 * (i + 1), 0);
            enemyTank.setDirect(2);//tube to down
            new Thread(enemyTank).start();
            // add a bullet for enemyTank
            Shot EnemyShot = new Shot(enemyTank.getX()+20,enemyTank.getY()+60,enemyTank.getDirect());
            enemyTank.shots.add(EnemyShot);
            // start enemt shot
            new Thread(EnemyShot).start();
            // add enemy
            enemyTanks.add(enemyTank);
        }
        // initialize three pics
        ig1 = Toolkit.getDefaultToolkit().getImage(myPanel.class.getResource("bomb1.png"));
        ig2 = Toolkit.getDefaultToolkit().getImage(myPanel.class.getResource("bomb2.png"));
        ig3 = Toolkit.getDefaultToolkit().getImage(myPanel.class.getResource("bomb3.png"));
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.fillRect(0,0,1000,750);//fill the Rect

        if (hero != null && hero.isLive) {
            // drawTanks and encapsulate it
            drawTank(hero.getX(), hero.getY(), g, hero.getDirect(), 0);
        }
        // draw hero's bullet
//        if(hero.shot != null && hero.shot.isLive == true){//bullet is not null and still using
//            System.out.println("bullet is re-drawing");
//            g.draw3DRect(hero.shot.x, hero.shot.y, 3,3,false);
//        }
        // loop and get hero's all bullet collection
        for (int i = 0; i < hero.shots.size(); i++) {
            Shot shot = hero.shots.get(i);
           if(shot != null && shot.isLive){//bullet is not null and still using
                g.draw3DRect(shot.x, shot.y, 3,3,false);
            }else {
               // remove from vendor
               hero.shots.remove(shot);
           }
        }

        // if vector has bombs, show it
        for (int i = 0; i < bombs.size(); i++) {
            Bomb bomb = bombs.get(i);
            //according to bomb object's life value
            if (bomb.life > 6) {
                g.drawImage(ig3, bomb.x, bomb.y, 60, 60, this);
            }else if(bomb.life > 3){
                g.drawImage(ig2, bomb.x, bomb.y, 60, 60, this);
            }else {
                g.drawImage(ig1, bomb.x, bomb.y, 60, 60, this);
            }
            bomb.lifeDown();//to life down and show the bomb viersion
            if(bomb.life == 0){
                bombs.remove(bomb);
            }
        }

        // draw all enemytanks by loop the vector
        for (int i = 0; i < enemyTanks.size(); i++) {
            //get current enemies
            EnemyTank enemyTank = enemyTanks.get(i);
            if(enemyTank.isLive) {
                drawTank(enemyTank.getX(), enemyTank.getY(), g, enemyTank.getDirect(), 1);
                // draw all bullets
                for (int j = 0; j < enemyTank.shots.size(); j++) {
                    //get each and draw
                    Shot shot = enemyTank.shots.get(j);
                    if (shot.isLive) {
                        g.draw3DRect(shot.x, shot.y, 3, 3, false);
                    } else {
                        //remove from vector
                        enemyTank.shots.remove(shot);
                    }
                }
            }
        }
    }
    //method to get the tank
    /**
     * @param x left top x-axis
     * @param y left top y-axis
     * @param g painting pen
     * @param direct tank moving direction
     * @param type of tank
     */
    public void drawTank(int x, int y, Graphics g,int direct, int type) {
        switch (type){
            //set the colour according the tank type
            case 0://our hero tank
                g.setColor(Color.cyan);
                break;
            case 1://enemy tank
                g.setColor(Color.yellow);
                break;
        }
        //draw the tank by the direction
        switch (direct){
            case 0://upper towards
                g.fill3DRect(x, y, 10, 60,false);//left wheel
                g.fill3DRect(x + 30, y, 10,60,false);//right wheel
                g.fill3DRect(x + 10, y + 10, 20,40,false);//rect cover
                g.fillOval(x + 10,y + 20,20,20);//oval cover
                g.drawLine(x+20,y+30,x+20,y);//tube
                break;
            case 1://right towards
                g.fill3DRect(x, y, 60, 10,false);//upper wheel
                g.fill3DRect(x, y + 30, 60,10,false);//lower wheel
                g.fill3DRect(x + 10, y + 10, 40, 20, false);//rect cover
                g.fillOval(x + 20,y + 10,20,20);//oval cover
                g.drawLine(x+30,y+20,x+60,y+20);//tube
                break;
            case 2://down towards
                g.fill3DRect(x, y, 10, 60,false);//left wheel
                g.fill3DRect(x + 30, y, 10,60,false);//right wheel
                g.fill3DRect(x + 10, y + 10, 20,40,false);
                g.fillOval(x + 10,y + 20,20,20);//oval cover
                g.drawLine(x+20,y+30,x+20,y+60);//tube
                break;
            case 3://left towards
                g.fill3DRect(x, y, 60, 10,false);//left wheel
                g.fill3DRect(x , y+ 30, 60, 10,false);//right wheel
                g.fill3DRect(x + 10, y + 10, 40,20,false);
                g.fillOval(x + 20,y + 10,20,20);//oval cover
                g.drawLine(x+30,y+20,x,y+20);//tube
                break;
            default:
                System.out.println("no changes at moment");
        }

    }

    @Override
    public void keyTyped(KeyEvent e) {

    }
    //wasd for direction
    @Override
    public void keyPressed(KeyEvent e) {
        if(e.getKeyCode() == KeyEvent.VK_W){
            //W key to change direction to upper
            hero.setDirect(0);
                //S2:change x,y to moving by moveXX()
            if(hero.getY() >0 ) {
                hero.moveUp();
            }
        }else if(e.getKeyCode() == KeyEvent.VK_D){
            //W key to change direction to right
            hero.setDirect(1);
            if((hero.getX() + 60) < 1000) {
                hero.moveRight();
            }
        }else if(e.getKeyCode() == KeyEvent.VK_S){
            //W key to change direction to down
            hero.setDirect(2);
            if((hero.getY() + 60) < 750) {
                hero.moveDown();
            }
        }else if(e.getKeyCode() == KeyEvent.VK_A){
            //W key to change direction to left
            hero.setDirect(3);
            if(hero.getX() > 0) {
                hero.moveLeft();
            }
        }
        // user press "j" to shot
        if(e.getKeyCode()==KeyEvent.VK_J){
//if(hero.shot == null || !hero.shot.isLive) {
//  hero.shotEnemyTank();
// }
            hero.shotEnemyTank();
        }
        //repaint the panel
        this.repaint();
    }

    // function to check if hero's bullet hitted enemytank
    // adding in run function
    // put vendor of bullet into hittanks
//    public void HitEnemyTank(){
//        for(int j = 0; j < hero.shots.size(); j++)
//        {
//            Shot shot = hero.shots.get(j);
//        }
//    }
    public void HitTanks(Shot s, Tank tank){
        // check hitted or not
        switch (tank.getDirect()){
            case 0:
            case 2:
                if( s.x > tank.getX() && s.x< (tank.getX()+40)
                 && s.y > tank.getY() && s.y < (tank.getY()+60)){
                        s.isLive = false;
                    tank.isLive = false;
                    // when bullet hitted the tank,remove the enemytank from the Vecotr
                    enemyTanks.remove(tank);
                    // add bombs object
                    Bomb bomb = new Bomb(tank.getX(), tank.getY());
                    bombs.add(bomb);
                }
                break;
            case 1:
            case 3:
                if( s.x > tank.getX() && s.x< (tank.getX()+60)
                        && s.y > tank.getY() && s.y < (tank.getY()+40)){
                    s.isLive = false;
                    tank.isLive = false;
                    Bomb bomb = new Bomb(tank.getX(), tank.getY());
                    bombs.add(bomb);
                }
                break;
        }
    }
    @Override
    public void keyReleased(KeyEvent e) {
    }

    public void hitEnemyTank(){
        if(hero.shot != null && hero.shot.isLive){// heros bullet hasnot hitted
            // loop all enemyTanks
            for (int i = 0; i < enemyTanks.size(); i++) {
                EnemyTank enemyTank = enemyTanks.get(i);
                HitTanks(hero.shot, enemyTank);
            }
        }
    }
    
    public void hitHero(){
        // loop all enemy tanks
        for (int i = 0; i < enemyTanks.size(); i++) {
            EnemyTank enemyTank = enemyTanks.get(i);
            for (int j = 0; j < enemyTank.shots.size(); j++) {
                Shot shot = enemyTank.shots.get(j);
                //check shot hit the hero
                if (hero.isLive && shot.isLive){
                    HitTanks(shot,hero);
                }
            }
        }
    }

    @Override
    public void run(){// 100ms to repaint to show the bullet moving
        while (true) {
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            // check bullet hitted tanks
//            if(hero.shot != null && hero.shot.isLive){// heros bullet hasnot hitted
//                // loop all enemyTanks
//                for (int i = 0; i < enemyTanks.size(); i++) {
//                    EnemyTank enemyTank = enemyTanks.get(i);
//                    HitTanks(hero.shot, enemyTank);
//                }
//            }
            hitEnemyTank();
            //check hero is hit by enemy
            hitHero();
            this.repaint();
        }
    }
}

```
##### [back to list](#java-graphics-coordinate-system)
5. Boomb
```java
package tankGame3;

/**
 * @version 2.0
 * @Authort Xiaoxu Tan
 */
public class Bomb {
    int x,y;
    int life = 9 ;// lifecycle of bomb
    boolean isLive = true;

    public Bomb(int x, int y) {
        this.x = x;
        this.y = y;
    }

    // life is descinding
    public void lifeDown(){
        if(life > 0){
            life --;
        }else{
            isLive = false;
        }
    }
}
```
##### [back to list](#java-graphics-coordinate-system)
6. gaming
```java
package tankGame3;

import javax.swing.*;
import java.awt.*;

/**
 * @version 2.0
 * @Authort Xiaoxu Tan
 */

public class game1 extends JFrame {
    //define mypanel
    myPanel mp = null;
    public static void main(String[] args) {
        game1 game1 = new game1();
    }
    public game1() {
        mp = new myPanel();

        Thread thread = new Thread(mp);
        thread.start();
        this.add(mp);//mypanel is the drawing area

        this.setSize(1000,750);
        this.addKeyListener(mp);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setVisible(true);
    }
}
```
##### [back to list](#java-graphics-coordinate-system)

7. Tank
```java
package tankGame3;

/**
 * @version 2.0
 * @Authort Xiaoxu Tan
 */

public class Tank {
    private int x;//x-axis
    private int y;//y-axis
    private int direct;//0-up 1=right 2=down 3=left
    private int speed = 1;
    boolean isLive = true;
    public void moveUp(){
        y -= speed;
    }
    public void moveDown(){
        y += speed;
    }
    public void moveRight(){
        x += speed;
    }
    public void moveLeft(){
        x -= speed;
    }
    public Tank(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    public int getDirect() {
        return direct;
    }

    public void setDirect(int direct) {
        this.direct = direct;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }
}

```
##### [back to list](#java-graphics-coordinate-system)

-----

## IO
## Input
### 1. InputStream
- FileInputStream
- BufferedInputStream
- ObjectInputSrream
### 2. Read
- FileReader
- BufferedReader
- InputStreamReader

## Output
### 1. OutputStream
- FileOutputStream
- BufferedOutputStream
- ObjectOutputSrream
### 2. Writer
- FileWriter
- BufferedWriter
- InputStreamWriter

## Porperties Class


### TankGame by IO

---------


