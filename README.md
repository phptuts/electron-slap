# SLAP ELECTRON APP

```c++
#include <Servo.h>

Servo servo;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  servo.attach(7);
  servo.write(175);
}

void loop() {
  // put your main code here, to run repeatedly:
  String message = Serial.readStringUntil("|");

  if (message == "SLAP|")
  {
    Serial.println("SLAP WORKED");
    servo.write(95);
    delay(2000);
    servo.write(175);
  }
  delay(100);
}
```
