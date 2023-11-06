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

-----

## 3. IO
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

---------


