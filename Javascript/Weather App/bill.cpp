#include <iostream>

using namespace std;

class Book {
    string title;
    float price;
public:
    void getData();
    void putData();
};

void Book::getData() {
    cout << "Title: ";
    cin >> title;
    cout << "Price: ";
    cin >> price;
}

void Book::putData() {
    cout << "Title: " << title << "\n";
    cout << "Price: " << price << "\n";
}

int main() {
    Book book1, book2, book3;
    book1.getData();
    book2.getData();
    book3.getData();
    book1.putData();
    book2.putData();
    book3.putData();

    return 0;
}
