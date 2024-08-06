# SLAP ELECTRON APP

```c++
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  String message = Serial.readStringUntil("|");
  if (message.length() > 3) {
     Serial.println(message);
  }
  if (message == "SLAP|")
  {
    Serial.println("SLAP WORKED");
    digitalWrite(13, HIGH);
    delay(2000);
    digitalWrite(13, LOW);
  }
  delay(100);
}
```
