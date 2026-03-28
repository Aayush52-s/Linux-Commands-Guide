// Full command dataset (same as before)
const commandData = {
    "File System Navigation": [
        { cmd: "pwd", desc: "Print working directory", example: "pwd" },
        { cmd: "ls", desc: "List directory contents", example: "ls -la", badge: "common" },
        { cmd: "cd", desc: "Change directory", example: "cd /home/user" },
        { cmd: "mkdir", desc: "Create directories", example: "mkdir -p parent/child" },
        { cmd: "rmdir", desc: "Remove empty directories", example: "rmdir empty_folder" },
        { cmd: "tree", desc: "Display directory tree", example: "tree -L 2" },
        { cmd: "dirs", desc: "Display directory stack", example: "dirs -v" },
        { cmd: "pushd", desc: "Push directory onto stack", example: "pushd /tmp" },
        { cmd: "popd", desc: "Pop directory from stack", example: "popd" }
    ],
    "File Operations": [
        { cmd: "cp", desc: "Copy files/directories", example: "cp -r source/ dest/" },
        { cmd: "mv", desc: "Move/rename files", example: "mv old.txt new.txt" },
        { cmd: "rm", desc: "Remove files/directories", example: "rm -rf folder", badge: "careful" },
        { cmd: "touch", desc: "Create empty file or update timestamp", example: "touch file.txt" },
        { cmd: "cat", desc: "Concatenate and display files", example: "cat file1 file2" },
        { cmd: "tac", desc: "Concatenate and display files in reverse", example: "tac file.txt" },
        { cmd: "head", desc: "Output first part of files", example: "head -20 file.txt" },
        { cmd: "tail", desc: "Output last part of files", example: "tail -f log.txt", badge: "common" },
        { cmd: "ln", desc: "Create hard/soft links", example: "ln -s target link" },
        { cmd: "rename", desc: "Rename multiple files", example: "rename 's/old/new/' *.txt" },
        { cmd: "install", desc: "Copy files and set attributes", example: "install -m 755 script.sh /usr/local/bin/" },
        { cmd: "mktemp", desc: "Create temporary file/directory", example: "mktemp -d" },
        { cmd: "basename", desc: "Strip directory and suffix", example: "basename /path/to/file.txt" },
        { cmd: "dirname", desc: "Strip last component from file name", example: "dirname /path/to/file.txt" },
        { cmd: "realpath", desc: "Print resolved absolute path", example: "realpath file.txt" }
    ],
    "Text Processing": [
        { cmd: "grep", desc: "Search text using patterns", example: "grep -r 'error' /var/log/" },
        { cmd: "sed", desc: "Stream editor for filtering/transformation", example: "sed 's/old/new/g' file" },
        { cmd: "awk", desc: "Pattern scanning and processing", example: "awk '{print $1}' file" },
        { cmd: "sort", desc: "Sort lines of text", example: "sort -nr file.txt" },
        { cmd: "uniq", desc: "Report or omit repeated lines", example: "sort file.txt | uniq -c" },
        { cmd: "wc", desc: "Print newline, word, byte counts", example: "wc -l file.txt" },
        { cmd: "cut", desc: "Remove sections from each line", example: "cut -d',' -f2 file.csv" },
        { cmd: "paste", desc: "Merge lines of files", example: "paste file1 file2" },
        { cmd: "join", desc: "Join lines of two files on common field", example: "join file1 file2" },
        { cmd: "tr", desc: "Translate or delete characters", example: "cat file | tr 'a-z' 'A-Z'" },
        { cmd: "diff", desc: "Compare files line by line", example: "diff file1 file2" },
        { cmd: "comm", desc: "Compare two sorted files line by line", example: "comm file1 file2" },
        { cmd: "split", desc: "Split a file into pieces", example: "split -l 1000 large.txt" },
        { cmd: "csplit", desc: "Split file based on context", example: "csplit file '/pattern/'" },
        { cmd: "expand", desc: "Convert tabs to spaces", example: "expand -t 4 file.txt" },
        { cmd: "unexpand", desc: "Convert spaces to tabs", example: "unexpand file.txt" }
    ],
    "System Information": [
        { cmd: "uname", desc: "Print system information", example: "uname -a" },
        { cmd: "hostname", desc: "Show or set system hostname", example: "hostname" },
        { cmd: "uptime", desc: "Show how long system has been running", example: "uptime" },
        { cmd: "date", desc: "Display or set date/time", example: "date '+%Y-%m-%d'" },
        { cmd: "cal", desc: "Display calendar", example: "cal 2026" },
        { cmd: "df", desc: "Report file system disk space usage", example: "df -h" },
        { cmd: "du", desc: "Estimate file space usage", example: "du -sh *" },
        { cmd: "free", desc: "Display amount of free and used memory", example: "free -h" },
        { cmd: "lsblk", desc: "List block devices", example: "lsblk -f" },
        { cmd: "blkid", desc: "Locate/print block device attributes", example: "blkid" },
        { cmd: "mount", desc: "Mount a filesystem", example: "mount /dev/sda1 /mnt" },
        { cmd: "umount", desc: "Unmount filesystems", example: "umount /mnt" },
        { cmd: "fdisk", desc: "Partition table manipulator", example: "fdisk -l", badge: "advanced" },
        { cmd: "parted", desc: "Partition editor", example: "parted /dev/sda print" },
        { cmd: "lsusb", desc: "List USB devices", example: "lsusb -t" },
        { cmd: "lspci", desc: "List PCI devices", example: "lspci -v" },
        { cmd: "dmidecode", desc: "DMI table decoder (hardware info)", example: "dmidecode -t processor" },
        { cmd: "inxi", desc: "Full system information", example: "inxi -Fxz" },
        { cmd: "neofetch", desc: "Display system information with logo", example: "neofetch" }
    ],
    "User Management": [
        { cmd: "useradd", desc: "Create a new user", example: "sudo useradd -m john" },
        { cmd: "userdel", desc: "Delete a user", example: "sudo userdel -r john" },
        { cmd: "usermod", desc: "Modify a user account", example: "sudo usermod -aG sudo john" },
        { cmd: "passwd", desc: "Change user password", example: "passwd john" },
        { cmd: "su", desc: "Switch user", example: "su - username" },
        { cmd: "sudo", desc: "Execute command as another user", example: "sudo command" },
        { cmd: "whoami", desc: "Print current username", example: "whoami" },
        { cmd: "id", desc: "Print user and group IDs", example: "id username" },
        { cmd: "groups", desc: "Show group memberships", example: "groups username" },
        { cmd: "last", desc: "Show last logins", example: "last -10" },
        { cmd: "w", desc: "Show who is logged on and what they are doing", example: "w" },
        { cmd: "who", desc: "Show who is logged on", example: "who -b" }
    ],
    "Permissions": [
        { cmd: "chmod", desc: "Change file permissions", example: "chmod 755 script.sh" },
        { cmd: "chown", desc: "Change file owner and group", example: "sudo chown user:group file" },
        { cmd: "chgrp", desc: "Change group ownership", example: "chgrp developers file" },
        { cmd: "umask", desc: "Set default permissions for new files", example: "umask 022" },
        { cmd: "getfacl", desc: "Get file ACLs", example: "getfacl file" },
        { cmd: "setfacl", desc: "Set file ACLs", example: "setfacl -m u:user:rw file" }
    ],
    "Process Management": [
        { cmd: "ps", desc: "Report a snapshot of current processes", example: "ps aux" },
        { cmd: "top", desc: "Display Linux tasks", example: "top" },
        { cmd: "htop", desc: "Interactive process viewer", example: "htop" },
        { cmd: "kill", desc: "Terminate a process", example: "kill -9 PID" },
        { cmd: "pkill", desc: "Signal processes by name", example: "pkill firefox" },
        { cmd: "killall", desc: "Kill processes by name", example: "killall chrome" },
        { cmd: "jobs", desc: "List background jobs", example: "jobs -l" },
        { cmd: "bg", desc: "Resume job in background", example: "bg %1" },
        { cmd: "fg", desc: "Resume job in foreground", example: "fg %1" },
        { cmd: "nohup", desc: "Run command immune to hangups", example: "nohup command &" },
        { cmd: "nice", desc: "Run a program with modified scheduling priority", example: "nice -n 10 command" },
        { cmd: "renice", desc: "Change priority of running process", example: "renice -n 5 -p PID" },
        { cmd: "lsof", desc: "List open files", example: "lsof -i :80" },
        { cmd: "strace", desc: "Trace system calls and signals", example: "strace command", badge: "advanced" },
        { cmd: "systemd-cgtop", desc: "Show top control groups", example: "systemd-cgtop" }
    ],
    "Networking": [
        { cmd: "ip", desc: "Show/manipulate routing, devices, policy routing", example: "ip addr show" },
        { cmd: "ifconfig", desc: "Configure network interface (deprecated)", example: "ifconfig eth0" },
        { cmd: "ping", desc: "Send ICMP ECHO_REQUEST to network hosts", example: "ping google.com" },
        { cmd: "traceroute", desc: "Print route packets take to network host", example: "traceroute google.com" },
        { cmd: "mtr", desc: "Network diagnostic tool", example: "mtr google.com" },
        { cmd: "netstat", desc: "Network statistics", example: "netstat -tuln" },
        { cmd: "ss", desc: "Socket statistics", example: "ss -tuln" },
        { cmd: "curl", desc: "Transfer data from/to server", example: "curl https://example.com" },
        { cmd: "wget", desc: "Non-interactive network downloader", example: "wget http://file.zip" },
        { cmd: "scp", desc: "Secure copy (remote file copy)", example: "scp file user@host:/path" },
        { cmd: "rsync", desc: "Remote file sync", example: "rsync -avz source/ dest/" },
        { cmd: "ssh", desc: "OpenSSH client", example: "ssh user@host" },
        { cmd: "telnet", desc: "Telnet client", example: "telnet host 23" },
        { cmd: "nc", desc: "Netcat - network utility", example: "nc -zv host 80" },
        { cmd: "nmap", desc: "Network exploration tool", example: "nmap -sP 192.168.1.0/24", badge: "advanced" },
        { cmd: "dig", desc: "DNS lookup utility", example: "dig google.com" },
        { cmd: "nslookup", desc: "Query DNS", example: "nslookup google.com" },
        { cmd: "host", desc: "DNS lookup", example: "host google.com" },
        { cmd: "arp", desc: "ARP cache manipulation", example: "arp -n" },
        { cmd: "route", desc: "Show/manipulate IP routing table", example: "route -n" }
    ],
    "Package Management": [
        { cmd: "apt", desc: "Advanced Package Tool (Debian/Ubuntu)", example: "apt update && apt upgrade" },
        { cmd: "apt-get", desc: "APT package handling utility", example: "apt-get install package" },
        { cmd: "yum", desc: "Yellowdog Updater Modified (RHEL/CentOS)", example: "yum install package" },
        { cmd: "dnf", desc: "Dandified YUM (Fedora)", example: "dnf install package" },
        { cmd: "zypper", desc: "Package manager for openSUSE", example: "zypper install package" },
        { cmd: "pacman", desc: "Package manager for Arch Linux", example: "pacman -S package" },
        { cmd: "snap", desc: "Snap package manager", example: "snap install package" },
        { cmd: "flatpak", desc: "Flatpak application sandboxing", example: "flatpak install flathub app" },
        { cmd: "pip", desc: "Python package installer", example: "pip install package" },
        { cmd: "npm", desc: "Node package manager", example: "npm install package" },
        { cmd: "gem", desc: "RubyGems package manager", example: "gem install package" },
        { cmd: "cargo", desc: "Rust package manager", example: "cargo install package" }
    ],
    "Compression & Archives": [
        { cmd: "tar", desc: "Tape archiver", example: "tar -czvf archive.tar.gz folder/" },
        { cmd: "gzip", desc: "Compress or expand files", example: "gzip file.txt" },
        { cmd: "gunzip", desc: "Decompress gzip files", example: "gunzip file.txt.gz" },
        { cmd: "bzip2", desc: "Block-sorting file compressor", example: "bzip2 file.txt" },
        { cmd: "bunzip2", desc: "Decompress bzip2 files", example: "bunzip2 file.txt.bz2" },
        { cmd: "xz", desc: "Compress files using LZMA", example: "xz file.txt" },
        { cmd: "unxz", desc: "Decompress xz files", example: "unxz file.txt.xz" },
        { cmd: "zip", desc: "Package and compress files", example: "zip -r archive.zip folder/" },
        { cmd: "unzip", desc: "Extract zip archives", example: "unzip archive.zip" },
        { cmd: "7z", desc: "7-Zip archiver", example: "7z a archive.7z folder/" },
        { cmd: "rar", desc: "RAR archiver", example: "rar a archive.rar folder/" }
    ],
    "Searching & Filtering": [
        { cmd: "find", desc: "Search for files in directory hierarchy", example: "find / -name '*.log' -size +10M" },
        { cmd: "locate", desc: "Find files by name (database)", example: "locate *.pdf" },
        { cmd: "updatedb", desc: "Update locate database", example: "sudo updatedb" },
        { cmd: "which", desc: "Locate a command", example: "which python3" },
        { cmd: "whereis", desc: "Locate binary, source, man pages", example: "whereis ls" },
        { cmd: "type", desc: "Display command type", example: "type ls" },
        { cmd: "whatis", desc: "Display one-line manual page descriptions", example: "whatis ls" },
        { cmd: "apropos", desc: "Search manual page names and descriptions", example: "apropos editor" },
        { cmd: "grep", desc: "Search text patterns", example: "grep -r 'error' ." },
        { cmd: "ack", desc: "Better grep for source code", example: "ack 'TODO' --python" },
        { cmd: "ag", desc: "The Silver Searcher - faster grep", example: "ag 'pattern'" }
    ],
    "Shell Scripting & Environment": [
        { cmd: "echo", desc: "Display a line of text", example: "echo 'Hello World'" },
        { cmd: "printf", desc: "Format and print data", example: "printf 'Name: %s\n' 'John'" },
        { cmd: "read", desc: "Read a line from standard input", example: "read var" },
        { cmd: "export", desc: "Set environment variable", example: "export PATH=$PATH:/new/path" },
        { cmd: "env", desc: "Show environment variables", example: "env" },
        { cmd: "set", desc: "Set shell options/positional params", example: "set -x" },
        { cmd: "unset", desc: "Unset values and attributes", example: "unset VAR" },
        { cmd: "alias", desc: "Create command alias", example: "alias ll='ls -alF'" },
        { cmd: "unalias", desc: "Remove alias", example: "unalias ll" },
        { cmd: "source", desc: "Execute commands from a file", example: "source ~/.bashrc" },
        { cmd: "exec", desc: "Execute command replacing shell", example: "exec ls" },
        { cmd: "shopt", desc: "Set shell options", example: "shopt -s histappend" }
    ],
    "System Services (systemd)": [
        { cmd: "systemctl", desc: "Control systemd system and service manager", example: "systemctl status sshd" },
        { cmd: "journalctl", desc: "Query systemd journal", example: "journalctl -u sshd -f" },
        { cmd: "hostnamectl", desc: "Control system hostname", example: "hostnamectl set-hostname myhost" },
        { cmd: "timedatectl", desc: "Control system time and date", example: "timedatectl status" },
        { cmd: "loginctl", desc: "Control the login manager", example: "loginctl list-sessions" },
        { cmd: "machinectl", desc: "Control systemd containers", example: "machinectl list" }
    ],
    "Disk Management": [
        { cmd: "fdisk", desc: "Partition table manipulator", example: "fdisk -l /dev/sda" },
        { cmd: "parted", desc: "Partition editor", example: "parted /dev/sda print" },
        { cmd: "mkfs", desc: "Build a Linux filesystem", example: "mkfs.ext4 /dev/sda1" },
        { cmd: "fsck", desc: "Check and repair filesystem", example: "fsck /dev/sda1", badge: "careful" },
        { cmd: "mount", desc: "Mount filesystem", example: "mount /dev/sda1 /mnt" },
        { cmd: "umount", desc: "Unmount filesystem", example: "umount /mnt" },
        { cmd: "dd", desc: "Convert and copy file", example: "dd if=/dev/sda of=backup.img bs=4M", badge: "careful" },
        { cmd: "lvdisplay", desc: "Display logical volume info", example: "lvdisplay" },
        { cmd: "pvdisplay", desc: "Display physical volume info", example: "pvdisplay" },
        { cmd: "vgdisplay", desc: "Display volume group info", example: "vgdisplay" }
    ],
    "Log Management": [
        { cmd: "tail", desc: "Output last part of files", example: "tail -f /var/log/syslog" },
        { cmd: "head", desc: "Output first part of files", example: "head /var/log/syslog" },
        { cmd: "less", desc: "View file with pagination", example: "less /var/log/syslog" },
        { cmd: "grep", desc: "Search log files", example: "grep 'error' /var/log/*.log" },
        { cmd: "logger", desc: "Enter message into system log", example: "logger 'This is a test'" },
        { cmd: "logrotate", desc: "Rotate, compress, and mail logs", example: "logrotate /etc/logrotate.conf" }
    ],
    "Scheduling Tasks": [
        { cmd: "cron", desc: "Daemon to execute scheduled commands", example: "crontab -e" },
        { cmd: "crontab", desc: "Manage cron tables", example: "crontab -l" },
        { cmd: "at", desc: "Execute commands at a specified time", example: "at now + 5 minutes" },
        { cmd: "batch", desc: "Execute commands when system load permits", example: "batch" },
        { cmd: "systemd-timer", desc: "Systemd timer units", example: "systemctl list-timers" }
    ]
};

// Flatten for counting
let allCommands = [];
for (const [cat, cmds] of Object.entries(commandData)) {
    cmds.forEach(c => allCommands.push({ ...c, category: cat }));
}
document.getElementById('totalCommands').innerText = allCommands.length;

// Generate category filter buttons (without numbers)
const categories = Object.keys(commandData);
const filterDiv = document.getElementById('filterButtons');
filterDiv.innerHTML = '<button class="filter-btn active" data-cat="all">All</button>' +
    categories.map(cat => `<button class="filter-btn" data-cat="${cat}">${cat}</button>`).join('');

let currentFilter = 'all';
let currentSearch = '';

function renderTOC() {
    const tocContainer = document.getElementById('tocContainer');
    if (!tocContainer) return;
    let filteredCategories = categories.filter(cat => {
        if (currentFilter !== 'all' && cat !== currentFilter) return false;
        if (currentSearch !== '') {
            return commandData[cat].some(cmd =>
                cmd.cmd.toLowerCase().includes(currentSearch.toLowerCase()) ||
                cmd.desc.toLowerCase().includes(currentSearch.toLowerCase()) ||
                (cmd.example && cmd.example.toLowerCase().includes(currentSearch.toLowerCase()))
            );
        }
        return true;
    });
    if (filteredCategories.length === 0) {
        tocContainer.style.display = 'none';
        return;
    }
    tocContainer.style.display = 'block';
    let html = '<h3>📑 Table of Contents (Numbered Categories)</h3><ul>';
    filteredCategories.forEach((cat, idx) => {
        const anchorId = `cat-${idx}`;
        html += `<li><a href="#${anchorId}">${idx+1}. ${cat}</a></li>`;
    });
    html += '</ul>';
    tocContainer.innerHTML = html;
}

function renderSections() {
    let filtered = allCommands.filter(cmd => {
        const matchCat = currentFilter === 'all' || cmd.category === currentFilter;
        const matchSearch = currentSearch === '' ||
            cmd.cmd.toLowerCase().includes(currentSearch.toLowerCase()) ||
            cmd.desc.toLowerCase().includes(currentSearch.toLowerCase()) ||
            (cmd.example && cmd.example.toLowerCase().includes(currentSearch.toLowerCase()));
        return matchCat && matchSearch;
    });

    // Group by category
    const grouped = {};
    filtered.forEach(cmd => {
        if (!grouped[cmd.category]) grouped[cmd.category] = [];
        grouped[cmd.category].push(cmd);
    });

    const container = document.getElementById('sectionsContainer');
    if (Object.keys(grouped).length === 0) {
        container.innerHTML = '<div style="text-align:center; padding:60px;">No commands match your search.</div>';
        return;
    }

    let html = '';
    let catIndex = 0;
    for (const cat of categories) {
        if (grouped[cat] && grouped[cat].length) {
            catIndex++;
            const anchorId = `cat-${catIndex-1}`;
            html += `<div class="category-section" id="${anchorId}">
                        <div class="category-header">${catIndex}. ${cat}</div>
                        <table class="commands-table">
                            <thead>
                                <tr>
                                    <th class="num-col">#</th>
                                    <th>Command</th>
                                    <th>Description</th>
                                    <th>Example</th>
                                </tr>
                            </thead>
                            <tbody>`;
            let rowNum = 1;
            grouped[cat].forEach(cmd => {
                let badgeHtml = '';
                if (cmd.badge === 'common') badgeHtml = '<span class="badge badge-common">common</span>';
                if (cmd.badge === 'careful') badgeHtml = '<span class="badge badge-careful">⚠️ careful</span>';
                if (cmd.badge === 'advanced') badgeHtml = '<span class="badge badge-advanced">advanced</span>';
                html += `<tr>
                            <td class="num-col" data-label="#">${rowNum++}</td>
                            <td data-label="Command"><code>${cmd.cmd}</code>${badgeHtml}</td>
                            <td data-label="Description">${cmd.desc}</td>
                            <td data-label="Example"><code>${cmd.example}</code></td>
                         </tr>`;
            });
            html += `</tbody>
                         </table>
                     </div>`;
        }
    }
    container.innerHTML = html;
}

function updateDisplay() {
    renderTOC();
    renderSections();
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', (e) => {
    currentSearch = e.target.value;
    updateDisplay();
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-cat');
        updateDisplay();
    });
});

updateDisplay();

// Theme toggle
function toggleTheme() {
    const body = document.body;
    const btn = document.querySelector('.theme-toggle');
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        btn.innerHTML = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark');
        btn.innerHTML = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    }
}
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    document.querySelector('.theme-toggle').innerHTML = '☀️ Light Mode';
}
