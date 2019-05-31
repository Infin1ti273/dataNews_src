from datetime import datetime


class TransYear:
    def __init__(self):
        f = open("ratings.csv", 'r', encoding='utf-8')
        f_new = open('ratings2.csv', 'w', encoding='utf-8')
        for line in f:
            arr = line.split(',')
            timestamp = int(arr[3])
            newline = line.replace(arr[3], datetime.fromtimestamp(timestamp).strftime('%Y-%m') + "\n")
            f_new.write(newline)
        f.close()
        f_new.close()


transYear = TransYear()
